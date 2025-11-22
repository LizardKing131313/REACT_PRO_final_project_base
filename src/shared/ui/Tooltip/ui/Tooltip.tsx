import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import { createPortal } from 'react-dom'

import type { Coordinates } from '../model/types'
import { Position } from '../model/types'

import styles from './Tooltip.module.css'

type TooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
  position?: Position
  offset?: number
}

const ANIMATION_MS = 160

function getTooltipRoot(): HTMLElement | null {
  return document.getElementById('tooltip-root')
}

function calculateTooltipCoordinates(
  triggerElement: HTMLElement,
  position: Position,
  offset: number,
): Coordinates {
  const rect = triggerElement.getBoundingClientRect()
  const horizontalCenter = rect.left + rect.width / 2
  const verticalCenter = rect.top + rect.height / 2

  switch (position) {
    case Position.Top:
      return {
        top: rect.top - offset,
        left: horizontalCenter,
        transform: 'translate(-50%, -100%)',
      }
    case Position.Bottom:
      return {
        top: rect.bottom + offset,
        left: horizontalCenter,
        transform: 'translate(-50%, 0)',
      }
    case Position.Left:
      return {
        top: verticalCenter,
        left: rect.left - offset,
        transform: 'translate(-100%, -50%)',
      }
    case Position.Right:
      return {
        top: verticalCenter,
        left: rect.right + offset,
        transform: 'translate(0, -50%)',
      }
    default:
      return {
        top: rect.bottom + offset,
        left: horizontalCenter,
        transform: 'translate(-50%, 0)',
      }
  }
}

function TooltipComponent({
  children,
  content,
  position = Position.Top,
  offset = 8
}: TooltipProps) {
  const triggerRef = useRef<HTMLSpanElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [coords, setCoords] = useState<Coordinates | null>(null)

  const updatePosition = useCallback(() => {
    const triggerElement = triggerRef.current
    if (!triggerElement) {
      return
    }
    setCoords(calculateTooltipCoordinates(triggerElement, position, offset))
  }, [position, offset])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    updatePosition()

    function handleViewportChange() {
      updatePosition()
    }

    window.addEventListener('scroll', handleViewportChange, true)
    window.addEventListener('resize', handleViewportChange, true)

    return () => {
      window.removeEventListener('scroll', handleViewportChange, true)
      window.removeEventListener('resize', handleViewportChange, true)
    }
  }, [isMounted, updatePosition])

  const tooltipRoot = getTooltipRoot()
  if (!tooltipRoot) {
    return (
      <span ref={triggerRef} className={styles.trigger}>
        {children}
      </span>
    )
  }

  function handleMouseEnter() {
    if (!isMounted) {
      setIsMounted(true)
      requestAnimationFrame(() => setIsShown(true))
      return
    }
    setIsShown(true)
  }

  function handleMouseLeave() {
    setIsShown(false)
    window.setTimeout(() => setIsMounted(false), ANIMATION_MS)
  }

  function handleFocus() {
    handleMouseEnter()
  }

  function handleBlur() {
    handleMouseLeave()
  }

  const portalNode =
    isMounted && coords
      ? createPortal(
        <div role="tooltip"
             className={styles.tooltip}
             style={{
               top: coords.top,
               left: coords.left,
               transform: `${coords.transform} scale(${isShown ? 1 : 0.98})`,
               opacity: isShown ? 1 : 0,
             }}>
          {content}
        </div>,
        tooltipRoot,
      )
      : null

  return (
    <span ref={triggerRef}
          className={styles.trigger}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}>
      {children}
      {portalNode}
    </span>
  )
}

export const Tooltip = memo(TooltipComponent)
Tooltip.displayName = 'Tooltip'
