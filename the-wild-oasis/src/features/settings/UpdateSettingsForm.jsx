import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";

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

    if (isLoading) return <Spinner />;
    return (
        <Form>
            <FormRow label="Minimum nights/booking">
                <Input
                    type="number"
                    id="min-nights"
                    defaultValue={minBookingLength}
                />
            </FormRow>
            <FormRow label="Maximum nights/booking">
                <Input
                    type="number"
                    id="max-nights"
                    defaultValue={maxBookingLength}
                />
            </FormRow>
            <FormRow label="Maximum guests/booking">
                <Input
                    type="number"
                    id="max-guests"
                    defaultValue={maxGuestsPerBooking}
                />
            </FormRow>
            <FormRow label="Breakfast price">
                <Input
                    type="number"
                    id="breakfast-price"
                    defaultValue={breakfastPrice}
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
