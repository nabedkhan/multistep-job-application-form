"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import EditorToolbar from "./EditorToolbar";

interface RichTextEditorProps {
  value: string;
  editable?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({
  value,
  editable,
  onChange,
  placeholder
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false
        }
      }),
      Underline
    ],
    editable,
    content: value,
    editorProps: {
      attributes: {
        class: "prose prose-sm focus:outline-none min-h-[150px] px-4 py-3 text-[#64748B]"
      }
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  useEffect(() => {
    if (!editor) return;

    if (value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  useEffect(() => {
    if (!editor) return;

    if (editor.isEmpty && value === "<p></p>") {
      onChange("");
    }
  }, [editor, onChange, value]);

  if (!editor) return null;

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} className="min-h-[150px]" />

      {!editor.getText() && placeholder && (
        <div className="absolute top-[60px] left-4 text-gray-400 pointer-events-none">
          {placeholder}
        </div>
      )}
    </div>
  );
}
