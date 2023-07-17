import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// First tao div portal-wrapper (cung cap vs root)
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

// Tao bien tra ve div portal-wrapper
const portalWrapperElm = createPortalWrapper();
// fixed inset-0 z-[9999]
//content relative z-10
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  // SECOND: dung useEffect de render div portal wrapper
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);

  // bien renderContent OVERLAY THI CHECK DIEU KIEN
  const renderContent = (
    <div className={`${containerClassName}`} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-60"
          onClick={onClose}
        ></div>
      )}
      <div className={`tooltip ${bodyClassName}`} style={bodyStyle}>
        {children}
      </div>
    </div>
  );

  // THIRD: dung create portal cua react-dom de render ra ben ngoai va trong div portal wrapper
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
