import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

/* eslint-disable-next-line */
export interface ImagesProps {
  src?: string;
  title?: string;
  width?: number;
  height?: number;
  rowHeight?: number;
}

export function Images(props: ImagesProps) {
  const { src, title, width, height, rowHeight } = props;
  if (rowHeight) {
    return (
      <ImageList
        cols={1}
        rowHeight={rowHeight}
        style={{ width: width ?? 'auto', height: height ?? 'auto' }}
      >
        <ImageListItem key={src}>
          <img src={`${src}`} alt={title} loading="lazy" />
        </ImageListItem>
      </ImageList>
    );
  } else {
    return (
      <ImageList
        cols={1}
        rowHeight={600}
        style={{ width: width ?? 'auto', height: height ?? 'auto' }}
      >
        <ImageListItem key={src}>
          <img src={`${src}`} alt={title} loading="lazy" />
        </ImageListItem>
      </ImageList>
    );
  }
}

export default Images;
