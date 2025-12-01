// components/NotificationButton.jsx
import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export default function NotificationButton() {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
      <Bell className="w-6 h-6 text-gray-600" />
      {hasNotification && (
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      )}
    </button>
  );
}