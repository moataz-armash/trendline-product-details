import { useState, useCallback } from "react";
import { ZodString } from "zod";

const ValidatedInput = ({
  name,
  wasSubmitted,
  errors,
  fieldSchema,
  defaultValue,
  className,
  inputMode,

  ...props
}: {
  name: string;
  wasSubmitted: boolean;
  errors: any;
  fieldSchema: ZodString;
  defaultValue?: string;
  className?: string;
  inputMode?: string;
  type?: string;
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const getErrors = useCallback(() => {
    const validationResult = fieldSchema.safeParse(value);
    return validationResult.success
      ? []
      : validationResult.error.flatten().formErrors;
  }, [fieldSchema, value]);

  const fieldErrors = errors || getErrors();
  const shouldRenderErrors = errors || wasSubmitted || touched;

  const handleBlur = () => setTouched(true);
  const handleChange = (e: any) => setValue(e.currentTarget.value);

  return (
    <>
      <input
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        defaultValue={defaultValue}
        className={fieldErrors.length > 0 ? "border-red-500" : ""}
        {...props}
      />
      {shouldRenderErrors && (
        <div className="text-xs text-red-500">{fieldErrors}</div>
      )}
    </>
  );
};
export { ValidatedInput };
