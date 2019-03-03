import React, { Fragment } from "react";
import { css } from "emotion";
import Button from "../Button";
import { useApp } from "../App.context";
import { getKeyForStage, stages } from "../utils";
import { colors } from "../styleGlobals";

const buttonWrapper = css`
  display: flex;
`;

const cardButton = css`
  width: 100%;
  border-radius: 0;
`;

const CardButtons = ({ id, stage }) => {
  const { updateTaskStage } = useApp();
  const currentStage = stages[stage];

  return (
    <div className={buttonWrapper}>
      {currentStage === stages.backlog && (
        <Button
          buttonStyle={cardButton}
          onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
          label='Start'
        />
      )}
      {currentStage === stages.inProgress && (
        <Fragment>
          <Button
            buttonStyle={cardButton}
            onClick={() => updateTaskStage(id, getKeyForStage(stages.backlog))}
            label='Backlog'
          />
          <Button
            buttonStyle={cardButton}
            isSecondaryStyle
            onClick={() =>
              updateTaskStage(id, getKeyForStage(stages.completed))
            }
            label='Complete'
          />
        </Fragment>
      )}
      {currentStage === stages.completed && (
        <Button
          buttonStyle={cardButton}
          onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
          label='Undo'
        />
      )}
    </div>
  );
};

export default CardButtons;
