import { useCallback } from "react";
import { Editor } from "@tiptap/react";

interface EditorToolbarProps {
  editor: Editor | null;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  const toggleBold = useCallback(() => {
    editor?.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor?.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor?.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleBulletList = useCallback(() => {
    editor?.chain().focus().toggleBulletList().run();
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    editor?.chain().focus().toggleOrderedList().run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="flex items-center gap-2 p-2 border-b border-neutral-200">
      <button
        type="button"
        title="Bold"
        onClick={toggleBold}
        className={`p-1 rounded hover:bg-gray-200 ${editor.isActive("bold") ? "bg-gray-200" : ""}`}>
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 14V0H5.56098C6.63415 0 7.56504 0.35 8.35366 1.05C9.14228 1.75 9.53658 2.63333 9.53658 3.7C9.53658 4.33333 9.36585 4.91667 9.02439 5.45C8.68293 5.98333 8.22764 6.39167 7.65854 6.675V6.825C8.35772 7.05833 8.92276 7.475 9.35366 8.075C9.78455 8.675 10 9.35 10 10.1C10 11.2333 9.57317 12.1667 8.71951 12.9C7.86585 13.6333 6.86992 14 5.73171 14H0ZM2.09756 5.925H5.41463C5.98374 5.925 6.47561 5.73333 6.89024 5.35C7.30488 4.96667 7.5122 4.48333 7.5122 3.9C7.5122 3.31667 7.30488 2.82917 6.89024 2.4375C6.47561 2.04583 5.98374 1.85 5.41463 1.85H2.09756V5.925ZM2.09756 12.1H5.60976C6.22764 12.1 6.76423 11.8917 7.21951 11.475C7.6748 11.0583 7.90244 10.5333 7.90244 9.9C7.90244 9.28333 7.6748 8.76667 7.21951 8.35C6.76423 7.93333 6.22764 7.725 5.60976 7.725H2.09756V12.1Z"
            fill="#031234"
          />
        </svg>
      </button>

      <button
        type="button"
        title="Italic"
        onClick={toggleItalic}
        className={`p-1 rounded hover:bg-gray-200 ${
          editor.isActive("italic") ? "bg-gray-200" : ""
        }`}>
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 14V11.8125H2.93571L6.75 2.1875H3.42857V0H12V2.1875H9.06429L5.25 11.8125H8.57143V14H0Z"
            fill="#031234"
          />
        </svg>
      </button>

      <button
        type="button"
        title="Underline"
        onClick={toggleUnderline}
        className={`p-1 rounded hover:bg-gray-200 ${
          editor.isActive("underline") ? "bg-gray-200" : ""
        }`}>
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 15V13.75H12V15H0ZM6 11.6667C4.55714 11.6667 3.33929 11.1875 2.34643 10.2292C1.35357 9.27083 0.857143 8.09722 0.857143 6.70833V0H2.57143V6.75C2.57143 7.66667 2.9 8.4375 3.55714 9.0625C4.21429 9.6875 5.02857 10 6 10C6.97143 10 7.78571 9.6875 8.44286 9.0625C9.1 8.4375 9.42857 7.66667 9.42857 6.75V0H11.1429V6.70833C11.1429 8.09722 10.6464 9.27083 9.65357 10.2292C8.66072 11.1875 7.44286 11.6667 6 11.6667Z"
            fill="#031234"
          />
        </svg>
      </button>

      <button
        type="button"
        title="Bullet List"
        onClick={toggleBulletList}
        className={`p-1 rounded hover:bg-gray-200 ${
          editor.isActive("bulletList") ? "bg-gray-200" : ""
        }`}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.991667 14C0.719445 14 0.486111 13.8872 0.291667 13.6617C0.0972222 13.4361 0 13.1678 0 12.8567C0 12.53 0.0972222 12.25 0.291667 12.0167C0.486111 11.7833 0.719445 11.6667 0.991667 11.6667C1.25093 11.6667 1.47454 11.7833 1.6625 12.0167C1.85046 12.25 1.94444 12.53 1.94444 12.8567C1.94444 13.1678 1.85046 13.4361 1.6625 13.6617C1.47454 13.8872 1.25093 14 0.991667 14ZM3.88889 13.5333V12.1333H14V13.5333H3.88889ZM0.991667 8.16667C0.719445 8.16667 0.486111 8.05389 0.291667 7.82833C0.0972222 7.60278 0 7.32667 0 7C0 6.67333 0.0972222 6.39722 0.291667 6.17167C0.486111 5.94611 0.719445 5.83333 0.991667 5.83333C1.25093 5.83333 1.47454 5.95 1.6625 6.18333C1.85046 6.41667 1.94444 6.68889 1.94444 7C1.94444 7.31111 1.85046 7.58333 1.6625 7.81667C1.47454 8.05 1.25093 8.16667 0.991667 8.16667ZM3.88889 7.7V6.3H14V7.7H3.88889ZM0.972222 2.33333C0.7 2.33333 0.469907 2.22056 0.281944 1.995C0.0939815 1.76944 0 1.49333 0 1.16667C0 0.84 0.0939815 0.563889 0.281944 0.338334C0.469907 0.112778 0.7 0 0.972222 0C1.24444 0 1.47454 0.112778 1.6625 0.338334C1.85046 0.563889 1.94444 0.84 1.94444 1.16667C1.94444 1.49333 1.85046 1.76944 1.6625 1.995C1.47454 2.22056 1.24444 2.33333 0.972222 2.33333ZM3.88889 1.86667V0.466667H14V1.86667H3.88889Z"
            fill="#031234"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={toggleOrderedList}
        className={`p-1 rounded hover:bg-gray-200 ${
          editor.isActive("orderedList") ? "bg-gray-200" : ""
        }`}
        title="Numbered List">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 14V13.2562H1.63333V12.6875H0.816667V11.9437H1.63333V11.375H0V10.6312H2.29444V14H0ZM4.06389 12.9281V11.6156H14V12.9281H4.06389ZM0 8.68437V7.98438L1.45833 6.05938H0V5.31562H2.29444V6.01562L0.816667 7.94062H2.29444V8.68437H0ZM4.06389 7.6125V6.3H14V7.6125H4.06389ZM0.816667 3.4125V0.74375H0V0H1.47778V3.4125H0.816667ZM4.06389 2.29688V0.984375H14V2.29688H4.06389Z"
            fill="#031234"
          />
        </svg>
      </button>
    </div>
  );
}
