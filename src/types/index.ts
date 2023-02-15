export interface Note extends NoteData {
  id: string;
}

export interface RawNote extends RawNoteData {
  id: string;
} 

export interface RawNoteData {
  title: string;
  markdown: string;
  tagIds: string[];
};

export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
};

export interface Tag {
  id: string;
  label: string;
};

