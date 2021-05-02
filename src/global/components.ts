import styled from 'styled-components';

interface Props {
    backgroundColor?: string,
    boxShadow?: string,
    zindex?: number,
    display?: string,
    justify?: string,
    overflow?: string,
    overX?: string,
    overY?: string,
    align?: string,
    width?: string,
    height?: string,
    minHeight?: string,
    maxHeight?: string,
    maxWidth?: string,
    minWidth?: string,
    margin?: string,
    padding?: string,
    border?: string,
    borderRadius?: string,
    radius?: string,
    direction?: string,
    wrap?: string,
    textSize?: string,
    fontStyle?: string,
    weight?: string,
    ident?: string,
    wordBreak?: string,
    textDecoration?: string,
    opacity?: string,
    textColor?: string,
    cursorStyle?: string,
    textShadow?: string,
    alignSelf?: string,
    position?: string,
    fontFamily?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    transition?: string,
    objectFit?: string,
    borderTop?: string,
    borderBottom?: string,
    borderLeft?: string,
    borderRight?: string
};

export const Text = styled.p`
    width: ${(p: Props) => p.width || '100%'};
    height: ${(p: Props) => p.height || 'fit-content'};
    min-height: ${(p: Props) => p.minHeight || 'unset'};
    max-height: ${(p: Props) => p.maxHeight || 'unset'};
    max-width: ${(p: Props) => p.maxWidth || 'unset'};
    min-width: ${(p: Props) => p.minWidth || 'unset'};  margin: ${({ margin }) => margin || '0 0'};
    margin: ${(p: Props) => p.margin || '0 0'};
    padding: ${(p: Props) => p.padding || '0 0'};
    font-size: ${(p: Props) => p.textSize || 'inherit'};
    font-style: ${(p: Props) => p.fontStyle || 'inherit'};
    font-weight: ${(p: Props) => p.weight || 'inherit'};
    text-indent: ${(p: Props) => p.ident || '0'};
    text-align: ${(p: Props) => p.align || 'unset'};
    word-break: ${(p: Props) => p.wordBreak || 'unset'};
    text-decoration: ${(p: Props) => p.textDecoration || 'unset'};
    opacity: ${(p: Props) => p.opacity || 1};
    color: ${(p: Props) => p.textColor || 'inherit'};
    cursor: ${(p: Props) => p.cursorStyle || 'unset'};
    text-align: ${(p: Props) => p.align || 'unset'};
    text-shadow: ${(p: Props) => p.textShadow || 'unset'};
    overflow-x: ${(p: Props) => p.overX || 'hidden'};
    overflow-y: ${(p: Props) => p.overY || 'hidden'}; 
    align-self: ${(p: Props) => p.alignSelf || 'inherit'};
    font-family: ${(p: Props) => p.fontFamily || 'Roboto, sans-serif'};
    position: ${(p: Props) => p.position || 'unset'};
    transition: ${(p: Props) => p.transition || 'unset'};
`;