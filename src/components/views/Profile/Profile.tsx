import { FC } from 'react';
import { AuthService } from '../../../services/auth.service';
import './Profile.scss';

import { useRecoilValue } from 'recoil';
import { themeState } from '../../recoil/theme';
import VBox from '../../helpers/VBox';

import { Avatar, Label, TextInput } from 'evergreen-ui';

const Profile: FC = () => {
  const theme = useRecoilValue(themeState);
  const session = AuthService.GetSession();

  return (
    <div className="Profile">
      <VBox maxWidth={280} margin="auto">
        <Avatar
          src={session?.photo}
          name={session?.displayName}
          size={100}
          marginBottom={10} />

        <VBox alignItems="start" marginBottom={10}>
          <Label color={theme.colors.text} marginBottom={5}>Full Name</Label>
          <TextInput value={session?.displayName} />
        </VBox>

        <VBox alignItems="start" marginBottom={10}>
          <Label color={theme.colors.text} marginBottom={5}>Email</Label>
          <TextInput value={session?.email} readOnly />
        </VBox>

        <VBox alignItems="start" marginBottom={10}>
          <Label color={theme.colors.text} marginBottom={5}>Uid</Label>
          <TextInput value={session?.uid} readOnly />
        </VBox>
      </VBox>
    </div>
  )
};

export default Profile;
