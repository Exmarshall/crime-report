"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormCompleted";

// ✅ Define the shape of your report data
interface ReportData {
  incidentType?: string;
  location?: string;
  description?: string;
  evidence?: string;
  [key: string]: any; // keep it flexible if more fields will be added
}

export function ReportWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [reportData, setReportData] = useState<ReportData>({});

  const handleStepComplete = async (data: ReportData) => {
    setReportData((prev) => ({ ...prev, ...data }));

    if (currentStep === 4) {
      return; // stop at last step
    }

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {currentStep === 1 && <ReportForm onComplete={handleStepComplete} />}
      {currentStep === 2 && (
        <ReportSubmitted data={reportData} onComplete={handleStepComplete} />
      )}
    </div>
  );
}
