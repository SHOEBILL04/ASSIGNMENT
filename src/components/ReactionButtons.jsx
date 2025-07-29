import { useState } from 'react';
import { 
  HeartIcon, 
  HandThumbUpIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ArrowUpTrayIcon 
} from '@heroicons/react/24/outline';
import { 
  HeartIcon as HeartIconSolid, 
  HandThumbUpIcon as HandThumbUpIconSolid 
} from '@heroicons/react/24/solid';

const ReactionButtons = ({ onReaction, initialCount }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  const [count, setCount] = useState(initialCount || 0);

  const reactions = [
    { name: 'like', icon: HandThumbUpIcon, activeIcon: HandThumbUpIconSolid, color: 'text-blue-500' },
    { name: 'love', icon: HeartIcon, activeIcon: HeartIconSolid, color: 'text-rose-500' },
    { name: 'comment', icon: ChatBubbleBottomCenterTextIcon, color: 'text-emerald-500' },
    { name: 'share', icon: ArrowUpTrayIcon, color: 'text-indigo-500' }
  ];

  const handleClick = (reaction) => {
    if (reaction === activeReaction) {
      setActiveReaction(null);
      setCount(prev => prev - 1);
    } else {
      setActiveReaction(reaction);
      setCount(prev => (reaction === 'like' || reaction === 'love' ? prev + 1 : prev));
    }
    if (onReaction) onReaction(reaction);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {reactions.map(({ name, icon: Icon, activeIcon: ActiveIcon, color }) => (
          <button
            key={name}
            onClick={() => handleClick(name)}
            className={`p-2 rounded-full hover:bg-gray-50 transition-all ${
              activeReaction === name 
                ? `${color} bg-${color.split('-')[1]}-50` 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label={name}
          >
            {activeReaction === name && ActiveIcon ? (
              <ActiveIcon className="h-5 w-5" />
            ) : (
              <Icon className="h-5 w-5" />
            )}
          </button>
        ))}
      </div>
      {count > 0 && (
        <span className="text-sm font-medium text-gray-500">
          {count} {count === 1 ? 'like' : 'likes'}
        </span>
      )}
    </div>
  );
};

export default ReactionButtons;
