import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }: any) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    const newPortalRoot = document.createElement('div');
    newPortalRoot.id = 'portal-root';
    document.body.appendChild(newPortalRoot);
  }

  const portalContainer = portalRoot || document.body;

  const portalElement = document.createElement('div');

  useEffect(() => {
    portalContainer.appendChild(portalElement);

    return () => {
      portalContainer.removeChild(portalElement);
    };
  }, [portalContainer, portalElement]);

  return ReactDOM.createPortal(children, portalElement);
};

export default PortalComponent;
