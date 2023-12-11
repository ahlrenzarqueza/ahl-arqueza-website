"use client";
import { throttle } from "lodash";
import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

interface ViewportContextValues {
  viewport: Viewport;
  isMobile: boolean;
}

const defaultValue = {} as ViewportContextValues;
const ViewportContext = createContext<ViewportContextValues>(defaultValue);

enum Viewport {
  PHONE = "PHONE",
  PHABLET = "PHABLET",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
  WIDE = "WIDE",
}

const getDeviceConfig = (width: number): Viewport => {
  if (width < 400) {
    return Viewport.PHONE;
  } else if (width < 768) {
    return Viewport.PHABLET;
  } else if (width < 1024) {
    return Viewport.TABLET;
  } else if (width < 1536) {
    return Viewport.DESKTOP;
  } else {
    return Viewport.WIDE;
  }
};

type ViewportProps = {
  children: ReactNode;
  // on the request (SSR) we detect using library 'mobile-detect', value is used for our initial state
  reqViewport?: Viewport;
};

const ViewportProvider: FC<ViewportProps> = ({ children, reqViewport }) => {
  const initialViewport = reqViewport || Viewport.WIDE;
  const [viewport, setViewport] = useState(initialViewport);

  const setCurrentViewport = useCallback(
    (currentViewport: Viewport) => {
      if (viewport !== currentViewport) {
        setViewport(currentViewport);
      }
    },
    [viewport]
  );

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Set CSS custom variable `--vh` value to use actual viewport height (for mobile browsers)
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // initial state
    const initialViewportCS = getDeviceConfig(window.innerWidth);
    setCurrentViewport(initialViewportCS);

    const calcInnerWidth = throttle(() => {
      const newViewport = getDeviceConfig(window.innerWidth);
      setCurrentViewport(newViewport);

      let vh = window.innerHeight * 0.01;
      // Set CSS custom variable `--vh` value to use actual viewport height (for mobile browsers)
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    // add event listener
    window.addEventListener("resize", calcInnerWidth);

    // remove event listener
    return () => {
      window.removeEventListener("resize", calcInnerWidth);
    };
    // if we add viewport the whole setup of setting the event listener only once is gone
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMobile = useMemo(() => {
    return (
      viewport === Viewport.PHONE ||
      viewport === Viewport.PHABLET ||
      viewport === Viewport.TABLET
    );
  }, [viewport]);

  return (
    <ViewportContext.Provider value={{ viewport, isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

function useViewport(): { viewport: Viewport; isMobile: boolean } {
  const context = useContext(ViewportContext);
  if (context === defaultValue) {
    throw new Error("useViewport is not used within a ViewportProvider");
  }
  return context;
}

export { ViewportProvider, useViewport, Viewport };
