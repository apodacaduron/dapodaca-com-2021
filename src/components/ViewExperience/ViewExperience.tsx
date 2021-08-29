import './ViewExperience.sass';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { FC } from 'react';
import { Globe, X } from 'react-feather';

import { IExperience } from '../../utils/interfaces';
import NoiseOverlay from '../NoiseOverlay/NoiseOverlay';

dayjs.extend(customParseFormat);

interface IProps {
  experience?: IExperience;
  visible: boolean;
  close: () => void;
}

const ViewExperience: FC<IProps> = ({ experience, visible, close }) => {
  const fromDate = () => {
    return dayjs(experience?.from, 'MM-YYYY').format('MMM, YYYY');
  };
  const toDate = () => {
    if (!experience?.isCurrent) {
      return dayjs(experience?.to, 'MM-YYYY').format('MMM, YYYY');
    }
    return 'Today';
  };
  const periodLength = () => {
    if (!experience?.isCurrent) {
      return dayjs(experience?.from, 'MM-YYYY').diff(
        dayjs(experience?.to, 'MM-YYYY'),
        'month'
      );
    }
    return dayjs(experience?.from, 'MM-YYYY').diff(dayjs(), 'month');
  };
  const getPeriods = () => {
    return `${fromDate()} - ${toDate()} ${periodLength()} Months`;
  };

  return (
    <div id="view-experience" className={visible ? "visible" : ""}>
      <NoiseOverlay opacity={0.5} />
      <button className="close" onClick={close}>
        <X />
      </button>
      <div className="view-content">
        <div className="title">
          <a href={experience?.url}>{experience?.title}</a>
        </div>
        <div className="period">{getPeriods()}</div>
        <div className="description">{experience?.description}</div>
        <div className="visit">
          <a href={experience?.url}>
            <Globe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewExperience;
