import React from 'react';
import { ProcessStepCard } from '../cards/ProcessStepCard';

// 1. Actualizamos la interfaz para pedir el keyMessage y quitar el icon
interface Step {
  title: string;
  description: string;
  keyMessage: string; 
}

interface ProcessStepsProps {
  steps: Step[];
}

export const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((item, index) => (
        <ProcessStepCard
          key={index}
          step={index + 1}
          title={item.title}
          description={item.description}
          keyMessage={item.keyMessage} // 2. Pasamos el dato a la tarjeta
          // Eliminamos la línea icon={item.icon} que causaba el error
        />
      ))}
    </div>
  );
};