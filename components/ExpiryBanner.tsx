'use client';

import React from 'react';
import { usePantry } from '../lib/pantry';
import { useI18n } from '../lib/i18n';
import { AlertCircle, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface ExpiryBannerProps {
  onCookExpiring: (ingredientName: string) => void;
}

export const ExpiryBanner: React.FC<ExpiryBannerProps> = ({ onCookExpiring }) => {
  const { expiringItems } = usePantry();
  const { t } = useI18n();

  if (expiringItems.length === 0) return null;

  const topExpiring = expiringItems[0];
  const count = expiringItems.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
      <div
        className="rounded-3xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border"
        style={{
          background: 'linear-gradient(135deg, #fff3e0 0%, #feece6 100%)',
          borderColor: '#fbd3c7',
          boxShadow: '0 4px 16px -2px rgba(231, 111, 81, 0.12)',
        }}
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#e76f51] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Clock size={20} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="badge-pill bg-[#e76f51] text-white py-0.5 px-2 text-[10px] font-bold uppercase tracking-wider">
                {topExpiring.daysRemaining <= 0 ? t('expiry.expired') : t('expiry.expiringSoon')}
              </span>
              <span className="text-xs font-bold text-[#e76f51]">
                {topExpiring.daysRemaining === 0
                  ? t('expiry.expiresToday')
                  : t('expiry.daysLeft', { days: topExpiring.daysRemaining })}
              </span>
            </div>

            <p className="text-sm font-bold text-[#192720] mt-1">
              Your <span className="underline decoration-[#e76f51] font-extrabold">{topExpiring.item.name}</span> {topExpiring.daysRemaining <= 0 ? 'has expired!' : `expires in ${topExpiring.daysRemaining} days.`}
              {count > 1 && ` (+${count - 1} more pantry items)`}
            </p>
            <p className="text-xs text-[#788c81] mt-0.5">
              Cook with them now to avoid food waste.
            </p>
          </div>
        </div>

        <button
          onClick={() => onCookExpiring(topExpiring.item.name)}
          className="btn-accent text-xs py-2.5 px-5 font-bold shadow-md shrink-0 flex items-center gap-1.5"
        >
          <Sparkles size={14} />
          <span>{t('expiry.findRecipes')}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
