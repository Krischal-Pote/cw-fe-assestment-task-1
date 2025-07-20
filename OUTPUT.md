Here, on the App.tsx all components were on the same code which made it hard to read or study the code so, i cleaned the code (readable code) and made four separate component i.e. SearchBar component , Header component , HeroSearch component and TagList component. This will help use to reuse this componets on this project to another pages also.

## BoxArea108 (SearchBar Component)
1. Removed unnessary useEffect on line 37
   - Issue: The useEffect triggered onSearch on every keystroke, causing unnecessary re-renders and poor UX.

   - Fix: Removed the useEffect. Search is now explicitly triggered via the Search button, aligning with user intent and best practices.

2. Accessibility issue with Search icon on line 98

   - Issue: Search icon was decorative but lacked aria-hidden, confusing screen readers.

   - Fix: Added aria-hidden="true" to clarify it’s decorative.

3. Improved Search button behavior on line 103

   - Issue: Search button did not clearly indicate an actionable interaction.

   - Fix: Explicitly added an onClick to trigger onSearch. Added hover and focus states for better UX and accessibility.

## BoxArea97 (HeroSearch Section)   

1. Missing alt attribute on image on line 84

   - Issue: The hero image lacked an alt attribute, impacting accessibility.

   - Fix: Added alt="Decorative background" to comply with accessibility guidelines.

2. Improved spacing for hierarchy on line 88

   - Issue: Headline and input were visually too close, hurting readability.

   - Fix: Increased spacing between heading and search bar using Tailwind utilities for better visual clarity.

## Header

1. Missing aria-label on input on line 118

   - Issue: Search input lacked an aria-label, making it unclear to screen readers.

   - Fix: Added aria-label="Header quick search" for clarity and accessibility.

2. Unnecessary nested spans around Search icon on line 112

   - Issue: Redundant nested spans increased DOM depth unnecessarily.

   - Fix: Cleaned up unnecessary spans for more semantic, maintainable HTML.

3. Focus indicator missing on input on line 118

   - Issue: Input lacked visible focus styling, reducing keyboard usability.

   - Fix: Added appropriate focus styling using Tailwind CSS utilities.

4. The search bar placeholder was not empty when click on the searchbar 
   - Issue: value="search" makes this a controlled component that will always show "search".
   Even when users click and try to type, the value remains "search".
   No state management is handling the input changes

   - Fix: Added placeholder="search" instead .
      For controlled approach: added useState and onChange

5. On mobile view the searchbar was overlaapping with the logo
   - Issue: No responsive breakpoints to handle mobile layout 

   - Fix: Used tailwind css media query for responsive layout of the header

## TagList
1. Potential key conflict on line 69

   - Issue: Using the tag string directly as a key without ensuring uniqueness could cause React issues.

   - Fix: Verified uniqueness of tags or namespaced them to prevent potential conflicts.

2. Improved hover feedback on tags on line 71

   - Issue: Tags lacked clear hover/active state for user feedback.

   - Fix: Added Tailwind hover classes for better interactivity and user feedback.

## Web accessibility
Full keyboard accessibility with Enter key handlers, focus management, and ARIA compliance, ensuring seamless navigation for users with disabilities and screen reader compatibility.


