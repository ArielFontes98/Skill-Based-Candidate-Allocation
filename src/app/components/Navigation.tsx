interface NavigationProps {
  currentSlide: number;
  goToSlide: (index: number) => void;
  navMapping: Record<string, number[]>;
}

export function Navigation({ currentSlide, goToSlide, navMapping }: NavigationProps) {
  const tabs = ['Problem', 'Solution', 'How it Works', 'Roadmap', 'Pilot & Next Steps'];
  
  const getActiveTab = () => {
    for (const [tab, slides] of Object.entries(navMapping)) {
      if (slides.includes(currentSlide)) {
        return tab;
      }
    }
    return tabs[0];
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tab: string) => {
    const targetSlides = navMapping[tab];
    if (targetSlides && targetSlides.length > 0) {
      goToSlide(targetSlides[0]);
    }
  };

  return (
    <nav className="w-full bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`
                  px-6 py-4 font-semibold text-sm transition-all relative
                  ${isActive 
                    ? 'text-[#820AD1]' 
                    : 'text-white/60 hover:text-white/90'
                  }
                `}
              >
                {tab}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#820AD1]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}