import React, { CSSProperties, useEffect } from "react";
import classNames from "classnames";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./carousel.module.css";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselImageItemProps>;
  readonly scrollPadding?: boolean;
  readonly className?: string;
  readonly style?: CSSProperties;
}

export interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly index: number;
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem,
  scrollPadding = false,
  className,
  style,
}: CarouselProps<T>) => {
  const {
    scrollRef,
    next,
    prev,
    goTo,
    pages,
    activePageIndex,
    snapPointIndexes,
  } = useSnapCarousel();

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          next();
          return;
        case "ArrowRight":
          prev();
          return;
        default:
          return;
      }
    };
    window.addEventListener("keypress", handle);
    return () => {
      window.removeEventListener("keypress", handle);
    };
  }, [next, prev]);

  return (
    <div
      className={classNames(className, styles.root, {
        [styles.scrollPadding]: scrollPadding,
      })}
      style={style}
    >
      <ul className={classNames(styles.scroll, "z-0")} ref={scrollRef}>
        {items.map((item, index) =>
          renderItem({
            item,
            index,
            isSnapPoint: snapPointIndexes.has(index),
            isActive: activePageIndex === index,
          })
        )}
      </ul>
      {/* <div className={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div> */}
      <div className={styles.controls}>
        <button
          disabled={activePageIndex === 0}
          onClick={() => prev()}
          className={styles.prevButton}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <ol className={styles.pagination}>
          {pages.map((_, i) => (
            <li key={i} className={classNames(styles.paginationItem)}>
              <button
                className={classNames(styles.paginationButton, {
                  "bg-green-500": i === activePageIndex,
                  "bg-gray-700": i !== activePageIndex,
                })}
                onClick={() => goTo(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
        <button
          disabled={activePageIndex === pages.length - 1}
          onClick={() => next()}
          className={styles.nextButton}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      <button
        className="outline-none bg-transparent absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        onClick={() => prev()}
      >
        <ChevronLeftIcon className="w-8 h-8 text-gray-400 hover:text-white" />
      </button>

      <button
        className="outline-none bg-transparent absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        onClick={() => next()}
      >
        <ChevronRightIcon className="w-8 h-8 text-gray-400 hover:text-white" />
      </button>
    </div>
  );
};

export interface CarouselImageItemProps {
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly src: StaticImageData | string;
  readonly title: string;
  readonly subtitle: string;
  readonly className?: string;
}

export const CarouselImageItem = ({
  isSnapPoint,
  isActive,
  src,
  title,
  className,
}: CarouselImageItemProps) => {
  return (
    <li
      className={classNames(className, styles.itemImageType, {
        [styles.snapPoint]: isSnapPoint,
        [styles.itemActive]: isActive,
      })}
    >
      <Image src={src} className={classNames(styles.itemImage)} alt={title} />
    </li>
  );
};

export interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const CarouselItem = ({
  isSnapPoint,
  isActive,
  className,
  children,
}: CarouselItemProps) => {
  return (
    <li
      className={classNames(className, styles.item, {
        [styles.snapPoint]: isSnapPoint,
        [styles.itemActive]: isActive,
      })}
    >
      {children}
    </li>
  );
};
