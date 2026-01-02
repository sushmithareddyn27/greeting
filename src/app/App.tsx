import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { FamilySelectionPage } from "./components/FamilySelectionPage";
import { WishPage } from "./components/WishPage";

type Screen = "landing" | "family" | "wish";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("landing");
  const [selectedMember, setSelectedMember] = useState<
    string | null
  >(null);

  const handleEnter = () => {
    setCurrentScreen("family");
  };

  const handleSelectMember = (memberId: string) => {
    setSelectedMember(memberId);
    setCurrentScreen("wish");
  };

  const handleBackToFamily = () => {
    setCurrentScreen("family");
    setSelectedMember(null);
  };

  const handleBackToLanding = () => {
    setCurrentScreen("landing");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-950">
      {/* Android Phone Frame */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-[#0a0e27] z-30 flex items-center justify-between px-8">
          <span className="text-white text-xs">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-white rounded-sm">
              <div className="w-2 h-2 bg-white rounded-sm m-0.5" />
            </div>
            <div className="w-4 h-3 border border-white rounded-sm">
              <div className="w-3 h-2 bg-white rounded-sm m-0.5" />
            </div>
            <div className="w-4 h-3 border border-white rounded-sm">
              <div className="w-full h-2 bg-white rounded-sm m-0.5" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full pt-11">
          {currentScreen === "landing" && (
            <LandingPage onEnter={handleEnter} />
          )}
          {currentScreen === "family" && (
            <FamilySelectionPage
              onSelectMember={handleSelectMember}
              onBack={handleBackToLanding}
            />
          )}
          {currentScreen === "wish" && selectedMember && (
            <WishPage
              memberId={selectedMember}
              onBack={handleBackToFamily}
            />
          )}
        </div>

        {/* Home Indicator (Android) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30" />
      </div>
    </div>
  );
}