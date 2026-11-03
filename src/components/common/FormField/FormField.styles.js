import styled, { css } from "styled-components";
import { colors, fonts, ease } from "@/styles/theme";

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 0;
`;

export const LabelText = styled.span`
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.text};
`;

const control = css`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  background: ${colors.white};
  font-family: ${fonts.sans};
  font-size: 15px;
  line-height: 1.4;
  color: ${colors.text};
  outline: none;
  transition: border-color 0.3s ${ease}, box-shadow 0.3s ${ease};

  &::placeholder {
    color: ${colors.muted};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${colors.text};
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }
`;

export const Input = styled.input`
  ${control}
`;

export const Textarea = styled.textarea`
  ${control}
  min-height: 110px;
  resize: vertical;
`;

export const SelectWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    width: 7px;
    height: 7px;
    border-right: 1.5px solid ${colors.text};
    border-bottom: 1.5px solid ${colors.text};
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }
`;

export const Select = styled.select`
  ${control}
  appearance: none;
  padding-right: 40px;
  cursor: pointer;
`;
