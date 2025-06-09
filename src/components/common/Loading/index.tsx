import { type FC } from 'react';

interface LoadingProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading: FC<LoadingProps> = ({ 
  fullScreen = true, 
  size = 'md', 
  text = 'Cargando...' 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const spinnerSize = sizeClasses[size];
  
  const Container = fullScreen ? FullScreenContainer : DefaultContainer;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <div 
          className={`
            ${spinnerSize} 
            border-4 
            border-primary-200 
            border-t-primary-600 
            rounded-full 
            animate-spin
          `}
        />
        {text && (
          <p className="mt-4 text-gray-600 font-medium">
            {text}
          </p>
        )}
      </div>
    </Container>
  );
};

const FullScreenContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
    {children}
  </div>
);

const DefaultContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center p-4">
    {children}
  </div>
);

export default Loading;