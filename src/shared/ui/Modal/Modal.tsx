import { classNames } from "shared/lib/classNames/classNames";
import React, { ReactNode, useRef, useState, useEffect, useCallback } from "react";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timeRef.current);
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={cls.contetn}
            onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
};
