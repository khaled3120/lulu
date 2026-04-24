import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const FullStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-[24px] h-[24px] text-[#00b67a] fill-current">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const HalfStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
    <defs>
      <linearGradient id="half-fill" x1="0" x2="1" y1="0" y2="0">
        <stop offset="50%" stopColor="#00b67a" />
        <stop offset="50%" stopColor="#e5e7eb" />
      </linearGradient>
    </defs>
    <path fill="url(#half-fill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const recentClaims = [
  { name: "Ashley V.", amount: 500 },
  { name: "Samantha P.", amount: 500 },
  { name: "Jessica L.", amount: 500 },
  { name: "Amanda C.", amount: 500 },
  { name: "Brittany M.", amount: 500 },
  { name: "Sarah K.", amount: 500 },
  { name: "Matthew G.", amount: 500 },
  { name: "Megan T.", amount: 500 },
  { name: "Christopher N.", amount: 500 },
  { name: "Lauren D.", amount: 500 },
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(14 * 60);
  const [claimIndex, setClaimIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const claimTimer = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setClaimIndex((prev) => (prev + 1) % recentClaims.length);
        setShowNotification(true);
      }, 300);
    }, 4000);

    return () => clearInterval(claimTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="min-h-[100dvh] bg-[#f5f6f8] flex flex-col items-center justify-center py-2 sm:py-10 px-4 font-sans selection:bg-[#d41935]/20 selection:text-[#d41935] overflow-hidden">
      
      {/* Floating Notification */}
      <div className="h-[40px] sm:h-[46px] w-[340px] max-w-full flex justify-center relative mb-3 sm:mb-8 shrink-0">
        {showNotification && (
          <div className="absolute top-0 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center gap-1.5 sm:gap-2 animate-in fade-in slide-in-from-top-4 duration-500 transition-all w-full sm:w-auto justify-center">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#d41935] shrink-0" />
            <span className="text-[#555] text-[13px] sm:text-[15px] whitespace-nowrap truncate">
              <span className="text-[#1c1c1c] font-bold">{recentClaims[claimIndex].name}</span> claimed ${recentClaims[claimIndex].amount}!
            </span>
          </div>
        )}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 w-full max-w-[380px] p-5 sm:p-8 pt-6 sm:pt-10 flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 max-h-[calc(100svh-80px)] overflow-y-auto noscrollbar">
        
        {/* Lululemon Logo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 shrink-0 pt-2 w-full">
          <svg viewBox="0 0 8.621 8.621" className="w-[64px] sm:w-[80px] h-auto text-[#d41935] fill-current drop-shadow-sm">
            <g transform="translate(-175.66129 -245.51129) scale(0.35278)">
              <path d="M518.32031 713.60547c-.95312 1.42578-2.16797 2.18359-3.52344 2.18359-.59375 0-1.21875-.14453-1.85937-.42969-.67969-.30078-1.27734-.85156-1.68359-1.55078-.40235-.69922-.5625-1.45312-.44922-2.13281.14062-.59375.45312-1.40234.8164-2.33984.94141-2.4375 2.23438-5.77735 1.11719-7.41016-.46875-.6875-1.31641-1.02344-2.58203-1.02734-1.26953.004-2.11328.33984-2.58594 1.02734-1.11328 1.63281.17578 4.97266 1.1211 7.41406.35937.9336.67578 1.74219.8125 2.34375.11718.67188-.043 1.42578-.44922 2.125-.40235.69922-1 1.25-1.67969 1.55078-.64063.28516-1.26953.42969-1.85938.42969-1.35546 0-2.57421-.75781-3.51953-2.17969l-.10937-.19531c.45312.22656 1.3164.60156 2.0625.60156.37109 0 .72265-.11328 1.07031-.34375 1.91406-1.27343 1.26172-2.80468-.0469-5.17187-.55469-1.00391-1.125-2.03906-1.37891-3.10938-.27344-1.14843-.52344-2.82421.47656-4.08984.46485-.59766 1.17969-1.05469 2.11719-1.36328.97266-.32422 2.22656-.49609 3.72656-.51953h.48438c1.5.0234 2.7539.19531 3.72656.51953.9375.30859 1.64844.76562 2.11719 1.36328 1 1.26563.75 2.94141.47656 4.08984-.25391 1.07032-.82422 2.10547-1.37891 3.10938-1.30859 2.36719-1.96484 3.89844-.0469 5.17187.34765.23047.69531.34375 1.07031.34375.74609 0 1.60547-.375 2.0625-.60156zm-8.16406-17.29297c-6.54297 0-11.84375 5.30078-11.84375 11.84375 0 6.53906 5.30078 11.84375 11.84375 11.84375S522 714.69531 522 708.15625c0-6.54297-5.30078-11.84375-11.84375-11.84375" />
            </g>
          </svg>
        </div>

        {/* Prize Value */}
        <h1 className="text-[#1c1c1c] text-[52px] sm:text-[72px] font-bold leading-none mb-1 sm:mb-3 tracking-tighter shrink-0">
          $500
        </h1>
        <p className="text-[#8e8a86] font-bold tracking-[0.2em] text-[11px] sm:text-[13px] mb-4 sm:mb-6 uppercase text-center shrink-0">
          Lululemon Gift Card
        </p>

        {/* Countdown Timer */}
        <div className="w-full bg-[#fafafa] border border-[#ebebeb] rounded-full py-2 sm:py-3 flex items-center justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-8 px-2 shrink-0">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#d41935]" strokeWidth={2.5} />
          <span className="text-[#1c1c1c] font-semibold text-[14px] sm:text-[15px]">
            Offer valid for {timeString}
          </span>
        </div>

        {/* Steps to Claim */}
        <div className="bg-[#fafafa] rounded-[16px] sm:rounded-[24px] border border-gray-100 p-4 sm:p-6 w-full space-y-3 sm:space-y-4 mb-4 sm:mb-8 shrink-0">
          {[
            "Click \"Claim Now\" below",
            "Enter your shipping details",
            "Complete 4-5 partner offers",
            "Enjoy your $500 reward!"
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-full bg-[#d41935] text-white flex items-center justify-center text-[12px] sm:text-[13px] font-bold shadow-sm">
                {i + 1}
              </div>
              <span className="text-[#1c1c1c] font-medium text-[14px] sm:text-[15px] leading-tight">{step}</span>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button 
          onClick={() => window.location.href = 'https://giftclick.org/aff_c?offer_id=4440&aff_id=144760'}
          className="w-full bg-[#d41935] hover:bg-[#b0142b] transition-colors active:scale-[0.96] text-white rounded-full py-3.5 sm:py-4 px-4 text-[15px] sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-[#d41935]/20 mb-3 sm:mb-6 group shrink-0 tracking-wide"
        >
          CLAIM NOW
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Review Badge */}
        <div className="flex flex-col items-center justify-center pt-1 shrink-0 scale-[0.85] sm:scale-100 transform origin-top">
          <div className="flex gap-[4px] mb-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <div className="text-[12px] font-bold text-[#1c1c1c] mb-1.5 uppercase tracking-wider text-center">
            Excellent based on 10,294 reviews
          </div>
          <div className="flex items-center justify-center gap-[6px]">
            <svg width="24" height="24" viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#00b67a] fill-current">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-[#1c1c1c] font-bold text-[15px] tracking-tight">Trustpilot</span>
          </div>
        </div>

      </div>
    </div>
  );
}
