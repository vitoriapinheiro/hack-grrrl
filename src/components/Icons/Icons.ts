import styled from 'styled-components';

import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import ForumIcon from '@material-ui/icons/Forum';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

interface Props {
  color?: string,
  hover?: string,
  size?: number,
};

export const Container = styled.div`
  width: 900px;
  height: 200px;
`;

export const ThumbUp = styled(ThumbUpRoundedIcon)`
  color: ${({ theme }) => theme.main.colors.gray};
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.main.colors.green}
  }
`;

export const ThumbDown = styled(ThumbDownRoundedIcon)`
  color: ${({ theme }) => theme.main.colors.gray};
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.main.colors.green}
  }
`;

export const Comment = styled(ForumIcon)`
  color: ${({ theme }) => theme.main.colors.gray};
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.main.colors.green}
  }
`;

export const Attention = styled(WarningRoundedIcon)`
  color: ${({ theme }) => theme.main.colors.gray};
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.main.colors.green}
  }
`;

export const Star = styled(StarOutlinedIcon)`
  color: ${({ theme }) => theme.main.colors.yellow}
`;
