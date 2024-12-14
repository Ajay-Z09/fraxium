interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-center items-center space-x-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  index + 1 === currentStep
                    ? "bg-accent text-white"
                    : index + 1 < currentStep
                    ? "bg-accent/20 text-accent"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`w-16 h-1 ml-4 ${
                  index + 1 < currentStep ? "bg-accent/20" : "bg-gray-100"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};