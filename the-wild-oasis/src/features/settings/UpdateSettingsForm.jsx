import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
    const {
        isLoading,
        error,
        settings: {
            "min-booking-length": minBookingLength,
            "max-booking-length": maxBookingLength,
            "max-guests-per-booking": maxGuestsPerBooking,
            "breakfast-price": breakfastPrice,
        } = {},
    } = useSettings();

    const { isUpdating, updateSettings } = useUpdateSettings();

    function updateHandler(e, field) {
        const { value } = e.target;

        if (!value) return;
        updateSettings({ [field]: value });
    }

    if (isLoading) return <Spinner />;
    return (
        <Form>
            <FormRow label="Minimum nights/booking">
                <Input
                    type="number"
                    id="min-nights"
                    defaultValue={minBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) => updateHandler(e, "min-booking-length")}
                />
            </FormRow>
            <FormRow label="Maximum nights/booking">
                <Input
                    type="number"
                    id="max-nights"
                    defaultValue={maxBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) => updateHandler(e, "max-booking-length")}
                />
            </FormRow>
            <FormRow label="Maximum guests/booking">
                <Input
                    type="number"
                    id="max-guests"
                    defaultValue={maxGuestsPerBooking}
                    disabled={isUpdating}
                    onBlur={(e) => updateHandler(e, "max-guests-per-booking")}
                />
            </FormRow>
            <FormRow label="Breakfast price">
                <Input
                    type="number"
                    id="breakfast-price"
                    defaultValue={breakfastPrice}
                    disabled={isUpdating}
                    onBlur={(e) => updateHandler(e, "breakfast-price")}
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
