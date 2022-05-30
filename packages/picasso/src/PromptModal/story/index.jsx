import { PromptModal } from '../PromptModal'
import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Overlays').createPage(
  'PromptModal',
  'Predefined modal for short prompts that asks user for input.'
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: PromptModal, name: 'PromptModal' })

page
  .createChapter()
  .addExample('PromptModal/story/Default.example.tsx', {
    title: 'Default',
    takeScreenshot: false
  }) // picasso-skip-visuals
  .addExample('PromptModal/story/Variants.example.tsx', {
    title: 'Variants',
    takeScreenshot: false
  }) // picasso-skip-visuals
  .addExample('PromptModal/story/WithInput.example.tsx', {
    title: 'With Input',
    takeScreenshot: false
  }) // picasso-skip-visuals
  .addExample('PromptModal/story/WithAutocomplete.example.tsx', {
    title: 'With Autocomplete',
    takeScreenshot: false
  }) // picasso-skip-visuals
  .addExample('PromptModal/story/ErrorHandling.example.tsx', {
    title: 'Error handling',
    takeScreenshot: false
  }) // picasso-skip-visuals
