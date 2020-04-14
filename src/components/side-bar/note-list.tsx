import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";

type Props = {
  theme?: any;
  status: number;
};

const NotesListComponent: FC<Props> = (props) => {
  return (<p></p>);
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const NotesList = connect(mapStateToProps)(NotesListComponent);

export default NotesList;