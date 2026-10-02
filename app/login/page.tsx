'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { LoginPageView } from '../../components/LoginPageView';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="login-page-root">
      <Navbar
        activeTab="login"
        setActiveTab={(tab: string) => {
          if (tab === 'home') router.push('/');
          else router.push('/?tab=' + tab);
        }}
        onOpenAuth={() => {}}
        onOpenProfile={() => router.push('/?tab=profile')}
      />

      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 relative w-full overflow-hidden">
        <LoginPageView
          onSuccess={() => router.push('/')}
          onNavigateHome={() => router.push('/')}
        />
      </main>
    </div>
  );
}
