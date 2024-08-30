import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const WorkCard = ({
  jobTitle,
  jobTag,
  date,
  detailsOne,
  detailsTwo,
  detailsThree,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-xl font-medium flex gap-1">
        {jobTitle}{" "}
        <span className="text-designColor tracking-wide">{jobTag}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-darkText">{date}</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 text-darkText">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} />
          </span>
          {detailsTwo}
        </li>
        <li className="flex gap-2 text-darkText">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} />
          </span>
          {detailsThree}
        </li>
        <li className="flex gap-2 text-darkText">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} />
          </span>
          {detailsOne}
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkCard;
