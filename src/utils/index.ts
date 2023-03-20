import {formatDistance} from 'date-fns';

export const convertStringUTCToDate = (dateValue: string) => {
  const date = new Date(dateValue);
  return date;
};

export const convertDateToDistance = (dateValue: Date) => {
  const date = formatDistance(dateValue, new Date(), {addSuffix: true});
  return date;
};
