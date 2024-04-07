import { useFetcher } from 'react-router-dom';
import Button from './Button';
import { updateOrder } from '../services/apiRestaurant';

const PriorityButton = ({ type }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type={type}>Add Priority</Button>
    </fetcher.Form>
  );
};

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default PriorityButton;
