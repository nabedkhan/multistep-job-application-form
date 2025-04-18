"use client";

import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Tab from "@/components/Tab";
import toast from "@/components/toast";
import DetailsTabContent from "@/components/tab-content/DetailsTabContent";
import CvCoverTabContent from "@/components/tab-content/CvCoverTabContent";

import {
  JobApplicationFormValues,
  jobApplicationFormSchema
} from "@/schemas/job-application-schema";

const INITIAL_VALUES = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "01712345678",
  jobTitle: "Frontend-Developer",
  schedule: "Nine-to-five",
  cv: undefined,
  coverLetter: ""
};

export default function JobApplicationForm() {
  const [activeTab, setActiveTab] = useState("details");

  const methods = useForm<JobApplicationFormValues>({
    resolver: yupResolver(jobApplicationFormSchema),
    defaultValues: INITIAL_VALUES,
    mode: "onChange"
  });

  const { reset, trigger, handleSubmit } = methods;

  const handleChangeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const handleNextTab = useCallback(async () => {
    const isValid = await trigger(["name", "email", "phone", "jobTitle", "schedule"]);
    if (isValid) {
      setActiveTab("cv");
    }
  }, [trigger, setActiveTab]);

  const handlePreviousTab = useCallback(() => {
    setActiveTab("details");
  }, [setActiveTab]);

  const onSubmit = handleSubmit((values) => {
    console.log(values);

    toast({
      title: "Job Application Successful!",
      description: "Congratulations, your job application done.",
      onClose: () => {
        reset();
        setActiveTab("details");
      }
    });
  });

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-xl font-semibold mb-6">Job Apply</h1>

      <div className="p-7 bg-white border border-neutral-200 rounded-[1.25rem] shadow-[0_4px_24px_0px_rgba(0,0,0,0.07)] overflow-hidden">
        <div className="flex gap-8 border-b-2 border-neutral-200">
          <Tab
            name="details"
            title="Details"
            activeTab={activeTab}
            handleChangeTab={handleChangeTab}
          />

          <Tab
            name="cv"
            activeTab={activeTab}
            title="CV & Cover letter"
            handleChangeTab={handleNextTab}
          />
        </div>

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="mt-6">
            {activeTab === "details" && <DetailsTabContent handleNextTab={handleNextTab} />}
            {activeTab === "cv" && <CvCoverTabContent handlePreviousTab={handlePreviousTab} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
