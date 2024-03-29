import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import { FaSearch, FaPlus } from "react-icons/fa";
import { MdSort } from "react-icons/md";

type Props = {
  theme?: any;
  status: number;
};

const Actions = styled.ul`
  font-family: "IM Fell English";
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Action = styled.li`
  padding: 0;

  .input-icons {
    margin-left: 9.5rem;
    margin-top: 0.95rem;
    position: absolute;
    font-size: 1.2rem;
    color: #ccc;
    cursor: text;
  }
  border-bottom: 1px solid #535353;
`;

const SearchBox = styled.input`
  border: none;
  height: 3.2rem;
  font-size: 1.4rem;
  width: 75%;
  padding: 0.5rem;
  :hover {
    background-color: #eee;
  }
`;
const Sort = styled.span`
  font-size: 2rem;
  margin: 0;
  color: #888;
  height: 3.25rem;
  :hover {
    background-color: #eee;
  }
  display: inline-block;
  width: 25%;
  padding: 0 0.5rem 0 0.75rem;
  i {
    margin: 0 auto;
  }
`;
const NewNoteButton = styled.button`
  background: #fff;
  border: none;
  box-shadow: none;
  padding: 1rem;
  font-size: 1.3rem;
  width: 100%;
  :hover {
    background-color: #dfdfdf;
  }
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #414141;
  }
  span {
    color: #414141;
  }
`;

const MenuActionsComponent: FC<Props> = (props) => {
  return (
    <Actions>
      <Action>
        <NewNoteButton>
          <FaPlus />
          <span>New Note</span>
        </NewNoteButton>
      </Action>
      <Action>
        <FaSearch className="input-icons" />
        <SearchBox placeholder="Search notes" id="search-box" />
        <Sort>
          <MdSort />
        </Sort>
      </Action>
    </Actions>
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const MenuActions = connect(mapStateToProps)(MenuActionsComponent);

export default MenuActions;
