import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Select from "@/components/Select";
import ErrorMessage from "@/components/ErrorMessage";

import { cn } from "@/utils/cn";
import { useAppSelector } from "@/redux/hooks";
import { JobApplicationFormValues } from "@/schemas/job-application-schema";

interface DetailsTabContentProps {
  handleNextTab: () => void;
}

export default function DetailsTabContent({ handleNextTab }: DetailsTabContentProps) {
  const { control } = useFormContext<JobApplicationFormValues>();
  const { titles, schedules } = useAppSelector((state) => state.jobs);

  return (
    <Fragment>
      <div className="space-y-6">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <div>
              <Label htmlFor={field.name}>Name</Label>
              <Input
                {...field}
                id={field.name}
                error={invalid}
                helperText={error?.message}
                placeholder="e.g. Robert Smith"
              />
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <div>
              <Label htmlFor={field.name}>Email</Label>
              <Input
                {...field}
                id={field.name}
                type="email"
                error={invalid}
                helperText={error?.message}
                placeholder="e.g. robertsmith@gmail.com"
              />
            </div>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <div>
              <Label htmlFor={field.name}>Phone</Label>
              <Input
                {...field}
                type="tel"
                id={field.name}
                error={invalid}
                helperText={error?.message}
                placeholder="e.g. (555) 123-4567"
              />
            </div>
          )}
        />

        <Controller
          name="jobTitle"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <div>
              <Label htmlFor={field.name}>Job title</Label>

              <Select
                {...field}
                id={field.name}
                options={titles}
                error={invalid}
                helperText={error?.message}
              />
            </div>
          )}
        />

        <Controller
          name="schedule"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Label>Job Schedule</Label>

              <div className="flex flex-wrap gap-2">
                {schedules.map((schedule) => (
                  <button
                    type="button"
                    key={schedule.id}
                    onClick={() => field.onChange(schedule.value, { shouldValidate: true })}
                    className={cn(
                      "px-4 py-2 rounded-full border text-neutral-500 border-neutral-200",
                      { "bg-secondary text-white border-secondary": field.value === schedule.value }
                    )}>
                    {schedule.title}
                  </button>
                ))}
              </div>

              {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
            </div>
          )}
        />
      </div>

      <div className="flex justify-end mt-12">
        <Button type="button" onClick={handleNextTab}>
          <span>Next: CV & Cover letter</span>

          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 7C0 6.73483 0.105345 6.48052 0.292861 6.29302C0.480376 6.10552 0.734701 6.00018 0.999888 6.00018H12.5846L8.29107 1.70896C8.10332 1.52122 7.99784 1.26659 7.99784 1.00108C7.99784 0.735579 8.10332 0.48095 8.29107 0.293211C8.47883 0.105471 8.73347 0 8.99899 0C9.26452 0 9.51916 0.105471 9.70692 0.293211L15.7062 6.29213C15.7994 6.385 15.8732 6.49533 15.9236 6.6168C15.9741 6.73827 16 6.86849 16 7C16 7.13151 15.9741 7.26173 15.9236 7.3832C15.8732 7.50467 15.7994 7.615 15.7062 7.70787L9.70692 13.7068C9.51916 13.8945 9.26452 14 8.99899 14C8.73347 14 8.47883 13.8945 8.29107 13.7068C8.10332 13.5191 7.99784 13.2644 7.99784 12.9989C7.99784 12.7334 8.10332 12.4788 8.29107 12.291L12.5846 7.99982H0.999888C0.734701 7.99982 0.480376 7.89448 0.292861 7.70698C0.105345 7.51948 0 7.26517 0 7Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </Fragment>
  );
}
