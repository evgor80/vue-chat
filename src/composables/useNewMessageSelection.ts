import { ref, watch, type Ref } from 'vue'

export function useNewMessageSelection(newMessage: Ref<string>, textareaRef: Ref<any>) {
  const selection = ref(-1)

  //sets caret position if emoji was added
  watch(newMessage, () => {
    if (selection.value >= 0) {
      textareaRef.value!.textRef.selectionStart = selection.value
      textareaRef.value!.textRef.selectionEnd = selection.value
      textareaRef.value!.textRef.focus()
      selection.value = -1
    }
  })

  return selection
}
