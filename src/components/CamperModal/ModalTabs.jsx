import moduleCss from './camperModal.module.css';

const ModalTabs = ({ activeTab, setActiveTab }) => (
  <div className={moduleCss.tabs}>
    <button
      className={activeTab === 'features' ? moduleCss.activeTab : ''}
      onClick={() => setActiveTab('features')}
    >
      Features
    </button>
    <button
      className={activeTab === 'reviews' ? moduleCss.activeTab : ''}
      onClick={() => setActiveTab('reviews')}
    >
      Reviews
    </button>
  </div>
);

export default ModalTabs;
