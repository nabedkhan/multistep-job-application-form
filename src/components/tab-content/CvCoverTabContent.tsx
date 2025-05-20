"use client";

import { Fragment, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Label from "@/components/Label";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import RichTextEditor from "@/components/rich-text-editor";
import DragDropFileUpload from "@/components/DragDropFileUpload";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { generateCoverLetter } from "@/redux/slices/coverLetterSlice";

import { JobApplicationFormValues } from "@/schemas/job-application-schema";

interface CvCoverTabContentProps {
  handlePreviousTab: () => void;
}

export default function CvCoverTabContent({ handlePreviousTab }: CvCoverTabContentProps) {
  const dispatch = useAppDispatch();
  const { content, isLoading } = useAppSelector((state) => state.coverLetter);
  const { control, getValues, setValue } = useFormContext<JobApplicationFormValues>();

  const handleGenerateCoverLetter = async () => {
    const { jobTitle, name, email, phone } = getValues();

    const content = `Generate a professional cover letter for a ${jobTitle} position.
                Applicant details:
                Name: ${name}
                Email: ${email}
                Phone: ${phone}`;

    await dispatch(generateCoverLetter(content));
  };

  useEffect(() => {
    if (!content || isLoading) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < content.length) {
        setValue("coverLetter", content.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 2);
      }
    };

    typeWriter();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [content, isLoading, setValue]);

  return (
    <Fragment>
      <div className="space-y-8">
        <Controller
          name="cv"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <div>
              <Label>CV</Label>

              {field.value && !invalid && (
                <div className="bg-[#EEFAFF] p-4 rounded-[10px] flex items-center mb-6">
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5 7.875V24.5C24.5 25.4283 24.1313 26.3185 23.4749 26.9749C22.8185 27.6313 21.9283 28 21 28H19.25V26.25H21C21.4641 26.25 21.9092 26.0656 22.2374 25.7374C22.5656 25.4092 22.75 24.9641 22.75 24.5V7.875H19.25C18.5538 7.875 17.8861 7.59844 17.3938 7.10616C16.9016 6.61387 16.625 5.94619 16.625 5.25V1.75H7C6.53587 1.75 6.09075 1.93437 5.76256 2.26256C5.43437 2.59075 5.25 3.03587 5.25 3.5V19.25H3.5V3.5C3.5 2.57174 3.86875 1.6815 4.52513 1.02513C5.1815 0.368749 6.07174 0 7 0L16.625 0L24.5 7.875ZM2.8 20.7375H0V27.7358H1.38425V25.3872H2.7895C3.29117 25.3872 3.71817 25.2863 4.0705 25.0845C4.42633 24.8803 4.69642 24.6038 4.88075 24.255C5.07288 23.8901 5.16979 23.4826 5.1625 23.0702C5.1625 22.6327 5.07033 22.2378 4.886 21.8855C4.70134 21.5372 4.42237 21.2479 4.081 21.0508C3.731 20.8407 3.304 20.7363 2.8 20.7375ZM3.75375 23.0702C3.75969 23.3008 3.7086 23.5292 3.605 23.7352C3.51211 23.9148 3.36686 24.0619 3.1885 24.157C2.98464 24.2574 2.7594 24.3066 2.53225 24.3005H1.379V21.84H2.534C2.9155 21.84 3.21417 21.9456 3.43 22.1567C3.64583 22.3703 3.75375 22.6747 3.75375 23.0702ZM5.8835 20.7375V27.7358H8.4385C9.14083 27.7358 9.723 27.5975 10.185 27.321C10.6525 27.0413 11.0176 26.6185 11.2262 26.1152C11.4549 25.5903 11.5693 24.9579 11.5693 24.2183C11.5693 23.4832 11.4549 22.8562 11.2262 22.337C11.0196 21.8398 10.6582 21.4224 10.1955 21.147C9.7335 20.874 9.14725 20.7375 8.43675 20.7375H5.8835ZM7.26775 21.8662H8.253C8.68583 21.8662 9.04108 21.9549 9.31875 22.1322C9.60667 22.3221 9.82431 22.6012 9.93825 22.9268C10.0759 23.2791 10.1447 23.7183 10.1447 24.2445C10.1502 24.5935 10.1102 24.9418 10.0258 25.2805C9.96538 25.5483 9.84843 25.8001 9.68275 26.019C9.53049 26.2152 9.32875 26.3675 9.09825 26.46C8.82814 26.561 8.5413 26.6097 8.253 26.6035H7.26775V21.8662ZM13.818 24.9515V27.7358H12.4355V20.7375H16.8945V21.8803H13.818V23.835H16.6285V24.9515H13.818Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="ms-3 text-[#334155] text-sm font-medium">
                    {field.value.name}
                  </span>
                </div>
              )}

              <DragDropFileUpload
                onChange={(file) => field.onChange(file, { shouldValidate: true })}
              />

              {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
            </div>
          )}
        />

        <div>
          <div className="flex justify-between items-center mb-4">
            <Label>Cover letter</Label>

            <Button
              type="button"
              loading={isLoading}
              onClick={handleGenerateCoverLetter}
              className="bg-gradient-to-r from-[#86088D] to-[#654FC6] gap-1 px-4 py-2 text-xs rounded-sm">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.25036 2C1.25036 1.90054 1.28986 1.80516 1.36019 1.73484C1.43052 1.66451 1.5259 1.625 1.62536 1.625H2.37536V0.875C2.37536 0.775544 2.41486 0.680161 2.48519 0.609835C2.55552 0.539509 2.6509 0.5 2.75036 0.5C2.84981 0.5 2.94519 0.539509 3.01552 0.609835C3.08585 0.680161 3.12536 0.775544 3.12536 0.875V1.625H3.87536C3.97481 1.625 4.07019 1.66451 4.14052 1.73484C4.21085 1.80516 4.25036 1.90054 4.25036 2C4.25036 2.09946 4.21085 2.19484 4.14052 2.26516C4.07019 2.33549 3.97481 2.375 3.87536 2.375H3.12536V3.125C3.12536 3.22446 3.08585 3.31984 3.01552 3.39016C2.94519 3.46049 2.84981 3.5 2.75036 3.5C2.6509 3.5 2.55552 3.46049 2.48519 3.39016C2.41486 3.31984 2.37536 3.22446 2.37536 3.125V2.375H1.62536C1.5259 2.375 1.43052 2.33549 1.36019 2.26516C1.28986 2.19484 1.25036 2.09946 1.25036 2ZM7.62536 8H7.25036V7.625C7.25036 7.52554 7.21085 7.43016 7.14052 7.35983C7.07019 7.28951 6.97481 7.25 6.87536 7.25C6.7759 7.25 6.68052 7.28951 6.61019 7.35983C6.53986 7.43016 6.50036 7.52554 6.50036 7.625V8H6.12536C6.0259 8 5.93052 8.03951 5.86019 8.10983C5.78986 8.18016 5.75036 8.27554 5.75036 8.375C5.75036 8.47446 5.78986 8.56984 5.86019 8.64017C5.93052 8.71049 6.0259 8.75 6.12536 8.75H6.50036V9.125C6.50036 9.22446 6.53986 9.31984 6.61019 9.39017C6.68052 9.46049 6.7759 9.5 6.87536 9.5C6.97481 9.5 7.07019 9.46049 7.14052 9.39017C7.21085 9.31984 7.25036 9.22446 7.25036 9.125V8.75H7.62536C7.72481 8.75 7.82019 8.71049 7.89052 8.64017C7.96085 8.56984 8.00036 8.47446 8.00036 8.375C8.00036 8.27554 7.96085 8.18016 7.89052 8.10983C7.82019 8.03951 7.72481 8 7.62536 8ZM10.2504 5.75H9.50036V5C9.50036 4.90054 9.46085 4.80516 9.39052 4.73484C9.32019 4.66451 9.22481 4.625 9.12536 4.625C9.0259 4.625 8.93052 4.66451 8.86019 4.73484C8.78986 4.80516 8.75036 4.90054 8.75036 5V5.75H8.00036C7.9009 5.75 7.80552 5.78951 7.73519 5.85983C7.66486 5.93016 7.62536 6.02554 7.62536 6.125C7.62536 6.22446 7.66486 6.31984 7.73519 6.39017C7.80552 6.46049 7.9009 6.5 8.00036 6.5H8.75036V7.25C8.75036 7.34946 8.78986 7.44484 8.86019 7.51517C8.93052 7.58549 9.0259 7.625 9.12536 7.625C9.22481 7.625 9.32019 7.58549 9.39052 7.51517C9.46085 7.44484 9.50036 7.34946 9.50036 7.25V6.5H10.2504C10.3498 6.5 10.4452 6.46049 10.5155 6.39017C10.5858 6.31984 10.6254 6.22446 10.6254 6.125C10.6254 6.02554 10.5858 5.93016 10.5155 5.85983C10.4452 5.78951 10.3498 5.75 10.2504 5.75ZM9.28051 2.75L2.75036 9.28016C2.60972 9.4207 2.41903 9.49965 2.2202 9.49965C2.02137 9.49965 1.83068 9.4207 1.69004 9.28016L0.71973 8.31078C0.650068 8.24114 0.594808 8.15845 0.557107 8.06744C0.519405 7.97644 0.5 7.8789 0.5 7.78039C0.5 7.68188 0.519405 7.58434 0.557107 7.49334C0.594808 7.40233 0.650068 7.31965 0.71973 7.25L7.25036 0.719844C7.32 0.650182 7.40269 0.594922 7.49369 0.55722C7.5847 0.519518 7.68224 0.500113 7.78075 0.500113C7.87925 0.500113 7.97679 0.519518 8.0678 0.55722C8.1588 0.594922 8.24149 0.650182 8.31114 0.719844L9.28051 1.68922C9.35017 1.75886 9.40543 1.84155 9.44314 1.93256C9.48084 2.02356 9.50024 2.1211 9.50024 2.21961C9.50024 2.31812 9.48084 2.41566 9.44314 2.50666C9.40543 2.59767 9.35017 2.68035 9.28051 2.75ZM6.71973 4.25L5.75036 3.28016L1.25036 7.78016L2.21973 8.75L6.71973 4.25ZM8.75036 2.21984L7.78051 1.25L6.28051 2.75L7.25036 3.71984L8.75036 2.21984Z"
                  fill="currentColor"
                />
              </svg>
              AI Write
            </Button>
          </div>

          <Controller
            name="coverLetter"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <RichTextEditor
                  editable={isLoading ? false : true}
                  onChange={(value) => field.onChange(value, { shouldValidate: true })}
                  value={isLoading ? "Generating..." : field.value.replaceAll("\n", "<br />")}
                />

                {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
              </>
            )}
          />
        </div>
      </div>

      <div className="mt-12 flex justify-between">
        <button
          type="button"
          className="flex items-center gap-2 text-neutral-700 text-base"
          onClick={handlePreviousTab}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5">
            <path
              d="M8 12C8 11.8326 8.02545 11.6756 8.07634 11.5291C8.12723 11.3827 8.21374 11.2466 8.33588 11.1211L13.9542 5.34529C14.1781 5.1151 14.4631 5 14.8092 5C15.1552 5 15.4402 5.1151 15.6641 5.34529C15.888 5.57549 16 5.86846 16 6.22422C16 6.57997 15.888 6.87294 15.6641 7.10314L10.9008 12L15.6641 16.8969C15.888 17.1271 16 17.42 16 17.7758C16 18.1315 15.888 18.4245 15.6641 18.6547C15.4402 18.8849 15.1552 19 14.8092 19C14.4631 19 14.1781 18.8849 13.9542 18.6547L8.33588 12.8789C8.21374 12.7534 8.12723 12.6173 8.07634 12.4709C8.02545 12.3244 8 12.1674 8 12Z"
              fill="currentColor"
            />
          </svg>

          <span>Previous</span>
        </button>

        <Button type="submit">
          <span>Submit</span>

          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
