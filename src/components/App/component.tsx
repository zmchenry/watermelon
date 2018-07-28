import * as React from 'react';
import { Stream } from 'src/components/Stream';
import { Streams } from 'src/components/Streams';
import './styles.scss';

export interface Props {
  liveStreams?: string[];
  streams?: string[];
  loading?: boolean;
  error?: boolean;
  fetchLiveStreams: () => void;
  fetchFollowedStreams: () => void;
  fetchFeaturedStreams: () => void;
}

export class AppPresentation extends React.Component<Props> {

  public componentDidMount() {
    this.props.fetchFeaturedStreams();
  }

  public render() {
    if (this.props.loading) {
      return null;
    }

    const featuredStreams = this.props.streams;
    const featuredStreamsNames = (!!featuredStreams && featuredStreams.length && featuredStreams);
    return (
      <div className="App">
        <Streams>
          {featuredStreamsNames && featuredStreamsNames.map(
            (name: string) => <Stream streamerName={name} key={name} />,
          )}
        </Streams>
      </div>
    );
  }
}
