const {
  useState
} = React;
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('light');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [lastViewedProfessionId, setLastViewedProfessionId] = useState(null);
  const [initialMenuOpen, setInitialMenuOpen] = useState(false);
  const t = key => window.translations['ru'][key] || key;
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const handleViewChange = (view, openMenu = false) => {
    setInitialMenuOpen(openMenu);
    setCurrentView(view);
  };
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return /*#__PURE__*/React.createElement(window.HomePage, {
          t: t,
          professions: window.professions,
          fullAlphabet: window.fullAlphabet,
          setSelectedProfession: setSelectedProfession,
          setCurrentView: handleViewChange,
          theme: theme,
          toggleTheme: toggleTheme,
          lastViewedProfessionId: lastViewedProfessionId,
          setLastViewedProfessionId: setLastViewedProfessionId,
          initialMenuOpen: initialMenuOpen
        });
      case 'professions':
        return /*#__PURE__*/React.createElement(window.ProfessionPage, {
          t: t,
          selectedProfession: selectedProfession,
          setSelectedProfession: setSelectedProfession,
          setCurrentView: handleViewChange,
          theme: theme
        });
      case 'history':
        return /*#__PURE__*/React.createElement(window.HistoryPage, {
          t: t,
          setCurrentView: handleViewChange,
          theme: theme
        });
      case 'career':
        return /*#__PURE__*/React.createElement(window.CareerGuidancePage, {
          t: t,
          setCurrentView: handleViewChange,
          theme: theme
        });
      case 'parents':
        return /*#__PURE__*/React.createElement(window.ParentsPage, {
          t: t,
          setCurrentView: handleViewChange,
          theme: theme
        });
      case 'gallery':
        return /*#__PURE__*/React.createElement(window.GalleryPage, {
          t: t,
          setCurrentView: handleViewChange,
          theme: theme
        });
      case 'album':
        return /*#__PURE__*/React.createElement(window.AlbumPage, {
          t: t,
          setCurrentView: handleViewChange,
          theme: theme,
          professions: window.professions
        });
      case 'print_v1':
        return /*#__PURE__*/React.createElement(window.PrintPage, {
          variant: 1,
          professions: window.professions,
          setCurrentView: handleViewChange
        });
      case 'print_v2':
        return /*#__PURE__*/React.createElement(window.PrintPage, {
          variant: 2,
          professions: window.professions,
          setCurrentView: handleViewChange
        });
      case 'print_v3':
        return /*#__PURE__*/React.createElement(window.PrintPage, {
          variant: 3,
          professions: window.professions,
          setCurrentView: handleViewChange
        });
      default:
        return /*#__PURE__*/React.createElement(window.HomePage, {
          t: t,
          professions: window.professions,
          fullAlphabet: window.fullAlphabet,
          setSelectedProfession: setSelectedProfession,
          setCurrentView: handleViewChange,
          theme: theme,
          toggleTheme: toggleTheme,
          lastViewedProfessionId: lastViewedProfessionId,
          setLastViewedProfessionId: setLastViewedProfessionId,
          initialMenuOpen: initialMenuOpen
        });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `${theme === 'dark' ? 'dark' : ''}`
  }, renderCurrentView());
};

// Render the App to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
