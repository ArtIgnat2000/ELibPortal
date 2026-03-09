// Global Components (attached to window to be accessible)

// Helper component for menu buttons
const MenuButton = ({
  onClick,
  label,
  icon
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  className: "w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-gray-700 dark:text-gray-200"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-xl"
}, icon), /*#__PURE__*/React.createElement("span", {
  className: "font-medium"
}, label));
window.HomePage = ({
  t,
  professions,
  fullAlphabet,
  setSelectedProfession,
  setCurrentView,
  theme,
  toggleTheme,
  lastViewedProfessionId,
  setLastViewedProfessionId,
  initialMenuOpen = false
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(initialMenuOpen);
  React.useEffect(() => {
    setIsSidebarOpen(initialMenuOpen);
  }, [initialMenuOpen]);
  React.useEffect(() => {
    if (lastViewedProfessionId) {
      const element = document.getElementById(`profession-${lastViewedProfessionId}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'auto',
          block: 'center'
        });
      }
    }
  }, [lastViewedProfessionId]);
  const handleMenuClick = action => {
    action();
    setIsSidebarOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-3 md:px-4 py-4 md:py-8"
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center mb-4 md:mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 flex-shrink-0"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 text-lg md:text-3xl font-bold text-white text-center leading-tight"
  }, t('title')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSidebarOpen(true),
    className: "bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition-colors shadow-md flex flex-col justify-center gap-1.5 w-10 h-10 items-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-gray-800 rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-gray-800 rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-gray-800 rounded-full"
  }))), isSidebarOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/50 z-40 transition-opacity backdrop-blur-sm",
    onClick: () => setIsSidebarOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed left-0 top-0 h-full w-[85vw] max-w-xs md:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto border-r border-gray-100 dark:border-gray-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-gray-800 dark:text-white"
  }, "\u041C\u0435\u043D\u044E"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSidebarOpen(false),
    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleTheme,
    className: "w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-gray-700 dark:text-gray-200 mb-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, theme === 'light' ? '🌙' : '☀️'), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, theme === 'light' ? 'Тёмная тема' : 'Светлая тема')), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-gray-200 dark:bg-gray-700 my-4"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('print_v1')),
    label: "\u041F\u0435\u0447\u0430\u0442\u044C \u0410\u0437\u0431\u0443\u043A\u0438",
    icon: "\uD83D\uDDA8\uFE0F"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('history')),
    label: t('history'),
    icon: "\uD83D\uDCDC"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('career')),
    label: t('careerGuidance'),
    icon: "\uD83E\uDDED"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('parents')),
    label: t('forParents'),
    icon: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('gallery')),
    label: t('gallery'),
    icon: "\uD83C\uDFA8"
  }), /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => handleMenuClick(() => setCurrentView('album')),
    label: t('myAlbum'),
    icon: "\uD83D\uDCD2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 text-center text-xs text-gray-400"
  }, "\u0412\u0435\u0440\u0441\u0438\u044F 1.0.0")))), /*#__PURE__*/React.createElement("section", {
    className: "text-center mb-3 md:mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-2 md:p-8 shadow-xl max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base md:text-4xl font-bold text-gray-800 mb-1 md:mb-4"
  }, t('welcome')), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/common/main.jpg",
    alt: "\u041A\u0430\u0440\u0442\u0430 \u0411\u0443\u043A\u0432\u0430\u0440\u0438\u043D\u0441\u043A\u0430",
    className: "w-full max-w-4xl h-auto rounded-xl shadow-lg object-contain",
    onError: e => {
      e.target.onerror = null;
      e.target.src = "https://placehold.co/800x400/png?text=Карта+Букваринска";
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "mb-6 md:mb-12"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl md:text-3xl font-bold text-white mb-3 md:mb-8 text-center"
  }, t('professions')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
  }, professions.map(profession => /*#__PURE__*/React.createElement("div", {
    key: profession.id,
    id: `profession-${profession.id}`,
    className: "w-full cursor-pointer transform hover:scale-105 transition-all duration-300",
    onClick: () => {
      setLastViewedProfessionId(profession.id);
      setSelectedProfession(profession);
      setCurrentView('professions');
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: profession.image,
    alt: profession.profession,
    className: "w-full aspect-square object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-1.5 md:p-3 flex-grow flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base md:text-xl font-bold text-purple-600"
  }, profession.letter)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs md:text-sm font-semibold text-gray-800 dark:text-white block truncate"
  }, profession.profession), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 dark:text-gray-400 italic mt-0.5 text-[10px] md:text-xs line-clamp-2 hidden sm:block"
  }, "\"", profession.poem, "\""))))))))));
};
window.ProfessionPage = ({
  t,
  selectedProfession,
  setSelectedProfession,
  setCurrentView,
  theme
}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-3 md:px-4 py-3 md:py-4"
  }, selectedProfession && /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 md:gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedProfession(null);
      setCurrentView('home');
    },
    className: "bg-blue-500 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-1 text-sm md:text-base"
  }, "\u2190 ", t('back'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl md:text-5xl font-bold text-gray-800 dark:text-white mb-1 md:mb-2"
  }, selectedProfession.profession), /*#__PURE__*/React.createElement("div", {
    className: "relative inline-block w-full max-w-xs md:max-w-md"
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedProfession.image,
    alt: selectedProfession.profession,
    className: "w-full aspect-square object-cover rounded-2xl md:rounded-3xl shadow-xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-yellow-400 text-black w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold shadow-lg"
  }, selectedProfession.letter))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
  }, t('story')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-lg"
  }, selectedProfession.description)), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 md:p-6 rounded-2xl shadow-lg text-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base md:text-xl font-bold mb-2"
  }, "\u0421\u0442\u0438\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430:"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-2xl italic mb-3"
  }, "\"", selectedProfession.poem, "\""), /*#__PURE__*/React.createElement("button", {
    className: "bg-white text-purple-600 py-1.5 px-5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md text-sm md:text-base"
  }, "\uD83D\uDD0A ", t('readPoem'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
  }, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0438\u0433\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-5 md:p-8 text-center mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base"
  }, selectedProfession.game)), /*#__PURE__*/React.createElement("button", {
    className: "w-full bg-green-500 text-white py-2.5 px-6 rounded-xl font-bold text-base md:text-lg hover:bg-green-600 transition-colors shadow-md"
  }, "\uD83C\uDFAE ", t('playGame'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white py-2.5 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
  }, "\uD83D\uDDA8\uFE0F ", t('print')), /*#__PURE__*/React.createElement("button", {
    className: "bg-purple-500 text-white py-2.5 px-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
  }, "\uD83D\uDCBE \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))))));
};
window.HistoryPage = ({
  t,
  setCurrentView,
  theme
}) => /*#__PURE__*/React.createElement("div", {
  className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto px-4 py-8"
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => setCurrentView('home'),
  className: "mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
}, "\u2190 ", t('back')), /*#__PURE__*/React.createElement("div", {
  className: "max-w-4xl mx-auto"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
}, t('aboutCity')), /*#__PURE__*/React.createElement("div", {
  className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-bold text-gray-800 dark:text-white mb-4"
}, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
}, "\u0411\u0443\u043A\u0432\u0430\u0440\u0438\u043D\u0441\u043A \u0431\u044B\u043B \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u0432 \u0434\u0430\u043B\u0435\u043A\u043E\u043C 1960 \u0433\u043E\u0434\u0443 \u043A\u0430\u043A \u043F\u0435\u0440\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0434, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u044B\u0439 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u0434\u0435\u0442\u0435\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F\u043C \u0447\u0435\u0440\u0435\u0437 \u0438\u0433\u0440\u043E\u0432\u0443\u044E \u0444\u043E\u0440\u043C\u0443. \u0418\u0434\u0435\u044F \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u043B\u0430 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u043E\u0432 \u0438 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0435\u0440\u0438\u043B\u0438, \u0447\u0442\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0435\u0431\u0435\u043D\u043E\u043A \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0435 \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0432 \u0440\u0430\u043D\u043D\u0435\u043C \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0435."), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-600 dark:text-gray-400 leading-relaxed"
}, "\u0413\u043E\u0440\u043E\u0434 \u0441\u0442\u0430\u043B \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u043C\u0435\u0441\u0442\u043E\u043C, \u0433\u0434\u0435 \u043A\u0430\u0436\u0434\u0430\u044F \u0431\u0443\u043A\u0432\u0430 \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u0432\u0435\u0440\u044C \u0432 \u043C\u0438\u0440 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439, \u043F\u043E\u043C\u043E\u0433\u0430\u044F \u0434\u0435\u0442\u044F\u043C \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C \u043A\u0440\u0443\u0433\u043E\u0437\u043E\u0440 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u0438\u0434\u0430\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.")), /*#__PURE__*/React.createElement("div", {
  className: "bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-gray-500"
}, "\u041A\u0430\u0440\u0442\u0430 \u0411\u0443\u043A\u0432\u0430\u0440\u0438\u043D\u0441\u043A\u0430"))), /*#__PURE__*/React.createElement("div", {
  className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
}, ['Архитектурный район', 'Научный квартал', 'Творческий центр', 'Образовательная зона'].map((area, index) => /*#__PURE__*/React.createElement("div", {
  key: index,
  className: "bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 rounded-lg text-center"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-2xl font-bold"
}, "#", index + 1), /*#__PURE__*/React.createElement("div", {
  className: "text-sm"
}, area))))))));
window.PrintPage = ({
  professions,
  setCurrentView,
  variant = 1
}) => {
  const handlePrint = () => {
    window.print();
  };

  // Common styles for printable area (A3 Landscape)
  const pageStyle = {
    width: '420mm',
    // A3 width landscape
    height: '296mm',
    // A3 height landscape (slightly less than 297 to avoid overflow)
    margin: '0 auto',
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
    pageBreakAfter: 'always'
  };

  // Variant 1: Strict Grid (Classic Educational Poster)
  // 33 letters -> Grid 6x6 (36 slots), perfect for filling A3
  // Changed grid to 7 cols to fit better in height, or adjust minimal size
  const renderVariant1 = () => /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "p-6 flex flex-col"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold text-center text-blue-800 mb-4 uppercase tracking-wider border-b-4 border-blue-200 pb-2"
  }, "\u0410\u0437\u0431\u0443\u043A\u0430 \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439: \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u0411\u0443\u043A\u0432\u0430\u0440\u0438\u043D\u0441\u043A"), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow grid grid-cols-7 gap-x-2 gap-y-3 content-start justify-items-center"
  }, professions.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "w-full border-2 border-blue-100 rounded-lg p-1.5 flex flex-col items-center bg-white shadow-sm overflow-hidden h-[50mm]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-grow mb-1 overflow-hidden rounded bg-gray-50 relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    loading: "lazy",
    className: "w-full h-full object-contain",
    alt: p.profession
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between w-full px-1 h-[6mm] relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-extrabold text-red-500 leading-none absolute left-0 bottom-0"
  }, p.letter), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-bold text-gray-800 uppercase tracking-tight text-right leading-none w-full pl-6 flex items-end justify-end h-full pb-0.5"
  }, p.profession))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-center text-gray-400 text-xs"
  }, "www.bukvarinsk.ru | \u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u044F"));

  // Variant 2: Modern Masonry / Dynamic (Varied sizes)
  // Emphasize the "City" feel with a more newspaper/magazine layout
  const renderVariant2 = () => /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-slate-50 relative overflow-hidden flex flex-col p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-20 -top-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply opacity-50 z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -left-20 -bottom-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply opacity-50 z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-6 border-b-2 border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-6"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/common/main.jpg",
    className: "w-48 h-24 object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-500",
    alt: "Map"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-6xl font-black text-slate-800 tracking-tighter leading-none"
  }, "\u0411\u0423\u041A\u0412\u0410\u0420\u0418\u041D\u0421\u041A"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl text-slate-500 font-bold tracking-[0.4em] uppercase mt-1 pl-1"
  }, "\u0413\u043E\u0440\u043E\u0434 \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u0432"))), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-6xl font-serif italic text-slate-300 transform -rotate-6"
  }, "\u0410-\u042F"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow grid grid-cols-7 grid-rows-5 gap-2"
  }, professions.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "relative group bg-white p-1.5 rounded border border-slate-100 hover:border-slate-300 transition-colors flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-grow relative overflow-hidden rounded mb-1 bg-gray-100"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    loading: "lazy",
    className: "w-full h-full object-cover",
    alt: p.profession
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 bg-slate-800/90 text-white text-xs font-bold px-1.5 py-0.5 rounded-tl"
  }, p.letter)), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-slate-700 block truncate"
  }, p.profession))))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 text-slate-300 text-[10px] font-mono"
  }, "DESIGN: BUKVARINSK STD.")));
  const renderVariant3 = () => /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-white p-5 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-0 w-full border-b-2 border-slate-100 pb-1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-serif text-slate-800 tracking-tight mb-0"
  }, "\u0410\u043B\u0444\u0430\u0432\u0438\u0442 \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 uppercase tracking-[0.3em] text-[10px] mt-0.5"
  }, "\u0411\u0443\u043A\u0432\u0430\u0440\u0438\u043D\u0441\u043A: \u0413\u043E\u0440\u043E\u0434 \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow grid grid-cols-6 gap-3 w-full content-start mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 row-span-1 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-2 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner border border-slate-200 h-[40mm]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-10 bg-[url('img/common/main.jpg')] bg-cover bg-center grayscale mix-blend-multiply"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 box-border flex flex-col items-center justify-center h-full"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-4xl mb-1 block"
  }, "\uD83C\uDF93"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-slate-700 mb-0 font-serif leading-tight"
  }, "\u041C\u0438\u0440 \u0417\u043D\u0430\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-[9px] leading-tight max-w-[120px] mx-auto mt-1"
  }, "\u0418\u0437\u0443\u0447\u0430\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 \u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0439 \u0441\u0432\u043E\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435."))), professions.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "bg-white rounded-xl p-1 flex flex-col items-center justify-between border border-slate-100 shadow-sm hover:shadow-md transition-all h-[40mm]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-grow relative mb-1 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[32mm] h-[32mm] rounded-full overflow-hidden bg-slate-50 border-2 border-slate-100 shadow-sm relative z-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    loading: "lazy",
    className: "w-full h-full object-cover",
    alt: p.profession
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-1 left-2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl font-extrabold shadow-md border-2 border-white z-10"
  }, p.letter)), /*#__PURE__*/React.createElement("div", {
    className: "w-full text-center h-[3mm] flex items-end justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[8px] font-bold text-slate-700 uppercase tracking-wider block leading-none w-full truncate"
  }, p.profession))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 w-full flex justify-between text-slate-300 text-[8px] uppercase tracking-widest border-t border-slate-100 pt-0.5"
  }, /*#__PURE__*/React.createElement("span", null, "Educational Poster Series"), /*#__PURE__*/React.createElement("span", null, "Format: A3 Landscape")));
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-200 flex flex-col"
  }, /*#__PURE__*/React.createElement("style", null, `
                    @media print {
                        @page { 
                            size: A3 landscape; 
                            margin: 0; 
                        }
                        body { 
                            background: white; 
                            -webkit-print-color-adjust: exact; 
                        }
                        .print-controls { display: none !important; }
                        .print-container { 
                            box-shadow: none !important;
                            width: 100% !important;
                            height: 100% !important;
                            page-break-after: always;
                            margin: 0 !important;
                            padding: 0 !important;
                            transform: none !important;
                        }
                    }
                `), /*#__PURE__*/React.createElement("div", {
    className: "print-controls md:hidden sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md px-3 py-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('home', true),
    className: "bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 flex-shrink-0"
  }, "\u2190 \u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1 flex-1 overflow-x-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v1'),
    className: `px-3 py-1.5 rounded-lg text-sm flex-shrink-0 flex items-center gap-1 ${variant === 1 ? 'bg-blue-100 text-blue-700 font-bold border border-blue-300' : 'bg-gray-100 text-gray-600'}`
  }, "\uD83D\uDCCB \u0421\u0442\u0440\u043E\u0433\u0438\u0439"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v2'),
    className: `px-3 py-1.5 rounded-lg text-sm flex-shrink-0 flex items-center gap-1 ${variant === 2 ? 'bg-blue-100 text-blue-700 font-bold border border-blue-300' : 'bg-gray-100 text-gray-600'}`
  }, "\uD83D\uDCF0 \u0416\u0443\u0440\u043D\u0430\u043B"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v3'),
    className: `px-3 py-1.5 rounded-lg text-sm flex-shrink-0 flex items-center gap-1 ${variant === 3 ? 'bg-blue-100 text-blue-700 font-bold border border-blue-300' : 'bg-gray-100 text-gray-600'}`
  }, "\uD83C\uDFA8 \u0410\u0440\u0442")), /*#__PURE__*/React.createElement("button", {
    onClick: handlePrint,
    className: "bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  })), "\u041F\u0435\u0447\u0430\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "print-controls hidden md:flex fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex-col gap-3 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 max-w-[200px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-gray-400 tracking-wider"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('home', true),
    className: "bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm w-full"
  }, /*#__PURE__*/React.createElement("span", null, "\u2190"), " \u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-px bg-gray-200 my-1"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v1'),
    className: `px-4 py-3 rounded-lg transition-colors text-left text-sm w-full flex items-center gap-2 ${variant === 1 ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200' : 'hover:bg-gray-50 text-gray-600'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDCCB"), " \u0421\u0442\u0440\u043E\u0433\u0438\u0439"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v2'),
    className: `px-4 py-3 rounded-lg transition-colors text-left text-sm w-full flex items-center gap-2 ${variant === 2 ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200' : 'hover:bg-gray-50 text-gray-600'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDCF0"), " \u0416\u0443\u0440\u043D\u0430\u043B"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('print_v3'),
    className: `px-4 py-3 rounded-lg transition-colors text-left text-sm w-full flex items-center gap-2 ${variant === 3 ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200' : 'hover:bg-gray-50 text-gray-600'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83C\uDFA8"), " \u0410\u0440\u0442"), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-px bg-gray-200 my-1"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handlePrint,
    className: "bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold shadow-md flex items-center justify-center gap-2 text-sm w-full"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  })), "\u041F\u0435\u0447\u0430\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-auto flex flex-col items-start md:items-center justify-start md:justify-center py-4 md:py-8 px-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "print-container bg-white shadow-2xl overflow-hidden origin-top-left scale-[0.22] xs:scale-[0.28] sm:scale-[0.38] md:scale-[0.52] lg:scale-[0.65] xl:scale-[0.80] 2xl:scale-100 transition-transform duration-300"
  }, variant === 1 && renderVariant1(), variant === 2 && renderVariant2(), variant === 3 && renderVariant3())), /*#__PURE__*/React.createElement("p", {
    className: "print-controls text-center text-gray-500 text-xs pb-3 px-4"
  }, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D. \u041F\u0440\u0438 \u043F\u0435\u0447\u0430\u0442\u0438 \u043D\u0430 \u04103 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0447\u0451\u0442\u043A\u043E\u0439."));
};
window.CareerGuidancePage = ({
  t,
  setCurrentView,
  theme
}) => /*#__PURE__*/React.createElement("div", {
  className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto px-4 py-8"
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => setCurrentView('home'),
  className: "mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
}, "\u2190 ", t('back')), /*#__PURE__*/React.createElement("div", {
  className: "max-w-4xl mx-auto"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
}, t('careerTest')), /*#__PURE__*/React.createElement("div", {
  className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
}, /*#__PURE__*/React.createElement("div", {
  className: "mb-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-semibold text-gray-800 dark:text-white mb-4"
}, t('question'), " 1: \u041A\u0430\u043A\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u0442\u0435\u0431\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F?"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, ['Рисовать и создавать', 'Изучать природу', 'Решать задачи', 'Помогать другим'].map((option, index) => /*#__PURE__*/React.createElement("label", {
  key: index,
  className: "flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
}, /*#__PURE__*/React.createElement("input", {
  type: "radio",
  name: "q1",
  className: "text-blue-500"
}), /*#__PURE__*/React.createElement("span", {
  className: "text-gray-700 dark:text-gray-300"
}, option))))), /*#__PURE__*/React.createElement("div", {
  className: "mb-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-semibold text-gray-800 dark:text-white mb-4"
}, t('question'), " 2: \u0427\u0442\u043E \u0442\u044B \u0445\u043E\u0442\u0435\u043B \u0431\u044B \u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C?"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, ['Создавать красивые вещи', 'Открывать новое', 'Помогать людям', 'Строить и изобретать'].map((option, index) => /*#__PURE__*/React.createElement("label", {
  key: index,
  className: "flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
}, /*#__PURE__*/React.createElement("input", {
  type: "radio",
  name: "q2",
  className: "text-blue-500"
}), /*#__PURE__*/React.createElement("span", {
  className: "text-gray-700 dark:text-gray-300"
}, option))))), /*#__PURE__*/React.createElement("button", {
  className: "w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
}, t('finish'))))));
window.ParentsPage = ({
  t,
  setCurrentView,
  theme
}) => /*#__PURE__*/React.createElement("div", {
  className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto px-4 py-8"
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => setCurrentView('home'),
  className: "mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
}, "\u2190 ", t('back')), /*#__PURE__*/React.createElement("div", {
  className: "max-w-4xl mx-auto"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
}, t('parentGuide')), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 gap-8"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-semibold text-gray-800 dark:text-white mb-4"
}, "\u041C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("ul", {
  className: "space-y-3 text-gray-600 dark:text-gray-400"
}, /*#__PURE__*/React.createElement("li", null, "\u2022 \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0443\u044E \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u041F\u043E\u043E\u0449\u0440\u044F\u0439\u0442\u0435 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0431\u0435\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u041E\u0431\u0441\u0443\u0436\u0434\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 \u0432 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0438\u0433\u0440\u044B \u0434\u043B\u044F \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A \u043D\u043E\u0432\u044B\u043C \u0437\u043D\u0430\u043D\u0438\u044F\u043C"))), /*#__PURE__*/React.createElement("div", {
  className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-semibold text-gray-800 dark:text-white mb-4"
}, "\u0421\u043E\u0432\u0435\u0442\u044B \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C"), /*#__PURE__*/React.createElement("ul", {
  className: "space-y-3 text-gray-600 dark:text-gray-400"
}, /*#__PURE__*/React.createElement("li", null, "\u2022 \u041D\u0435 \u043D\u0430\u0432\u044F\u0437\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u041F\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0440\u0435\u0431\u0435\u043D\u043A\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u0425\u0432\u0430\u043B\u0438\u0442\u0435 \u0437\u0430 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u2022 \u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435")))))));
window.GalleryPage = ({
  t,
  setCurrentView,
  theme
}) => /*#__PURE__*/React.createElement("div", {
  className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto px-4 py-8"
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => setCurrentView('home'),
  className: "mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
}, "\u2190 ", t('back')), /*#__PURE__*/React.createElement("div", {
  className: "max-w-6xl mx-auto"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
}, t('gallery')), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
}, [1, 2, 3, 4, 5, 6].map(item => /*#__PURE__*/React.createElement("div", {
  key: item,
  className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-gray-200 border-2 border-dashed rounded-t-2xl w-full h-48 flex items-center justify-center"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-gray-500"
}, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0440\u0435\u0431\u0435\u043D\u043A\u0430 #", item)), /*#__PURE__*/React.createElement("div", {
  className: "p-4"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-semibold text-gray-800 dark:text-white"
}, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0443\u0447\u0435\u043D\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-gray-600 dark:text-gray-400"
}, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F: \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440"))))), /*#__PURE__*/React.createElement("div", {
  className: "mt-8 text-center"
}, /*#__PURE__*/React.createElement("button", {
  className: "bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
}, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0440\u0430\u0431\u043E\u0442\u0443")))));
window.AlbumPage = ({
  t,
  setCurrentView,
  theme,
  professions
}) => /*#__PURE__*/React.createElement("div", {
  className: `min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto px-4 py-8"
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => setCurrentView('home'),
  className: "mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
}, "\u2190 ", t('back')), /*#__PURE__*/React.createElement("div", {
  className: "max-w-6xl mx-auto"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
}, t('myAlbum')), /*#__PURE__*/React.createElement("div", {
  className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center"
}, "\u0418\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 (", professions.length, ")"), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
}, professions.map(profession => /*#__PURE__*/React.createElement("div", {
  key: profession.id,
  className: "bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-2xl font-bold"
}, profession.letter), /*#__PURE__*/React.createElement("span", {
  className: "text-sm"
}, profession.profession)), /*#__PURE__*/React.createElement("div", {
  className: "mt-2 text-xs opacity-90"
}, "\u2713 \u0418\u0437\u0443\u0447\u0435\u043D\u043E")))), /*#__PURE__*/React.createElement("div", {
  className: "mt-8 text-center"
}, /*#__PURE__*/React.createElement("button", {
  className: "bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
}, t('saveProgress')))))));
