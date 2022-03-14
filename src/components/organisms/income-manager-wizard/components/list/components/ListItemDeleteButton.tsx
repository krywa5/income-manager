import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import React, { FunctionComponent } from "react";

interface ListItemDeleteButtonProps {
  onClick: () => void;
}

const ListItemDeleteButton: FunctionComponent<ListItemDeleteButtonProps> = ({
  onClick,
}) => {
  return (
    <Tooltip title="Usuń" placement="top">
      <Button
        onClick={onClick}
        variant="text"
        sx={{
          p: 0,
          minWidth: 24,
        }}
        color="error"
      >
        <DeleteIcon color="error" />
      </Button>
    </Tooltip>
  );
};

export default ListItemDeleteButton;
