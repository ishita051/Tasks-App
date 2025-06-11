# My Tasks App 📋

**Developer:** [Your Name Here]

A beautiful and functional task management mobile application built with React Native and Expo. This app helps you organize your daily tasks with local notifications, persistent storage, and an intuitive user interface.

## Features ✨

### Core Functionality
- ✅ **Add Tasks**: Simple text input to add new tasks
- 📝 **Task List**: Scrollable list displaying all tasks
- ☑️ **Toggle Completion**: Tap tasks to mark as complete/incomplete
- 🗑️ **Delete Tasks**: Remove tasks with confirmation dialog
- 🔔 **Local Notifications**: Automatic reminders 1 minute after task creation
- 💾 **Data Persistence**: Tasks saved locally using AsyncStorage

### Visual Enhancements
- 🎨 **Modern UI Design**: Clean, professional interface with gradient headers
- 📱 **Responsive Layout**: Optimized for various screen sizes
- 🎭 **Smooth Animations**: Fade-in effects and smooth transitions
- 🏷️ **Task Categorization**: Separate sections for pending and completed tasks
- 📊 **Task Counter**: Real-time display of pending and completed task counts
- 🎯 **Empty State**: Helpful placeholder when no tasks exist

### Smart Features
- 🔕 **Notification Management**: Automatically cancels notifications for completed tasks
- ⚠️ **Input Validation**: Prevents adding empty tasks
- 🔄 **State Management**: Proper React hooks implementation
- 📱 **Cross-Platform**: Works on both iOS and Android

## Setup Instructions 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd my-tasks-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Clear any existing cache**
   ```bash
   npm start -- --clear
   # or if using yarn
   yarn start --clear
   ```

4. **Start the development server**
   ```bash
   npx expo start
   # or
   expo start
   ```

5. **Run on your device**
   - Install "Expo Go" from App Store (iOS) or Google Play Store (Android)
   - Scan the QR code displayed in your terminal or browser
   - The app will load on your device

### Alternative Running Methods

**For iOS Simulator:**
```bash
npx expo start --ios
```

**For Android Emulator:**
```bash
npx expo start --android
```

**For Web Browser:**
```bash
npx expo start --web
```

## Project Structure 📁

```
my-tasks-app/
├── App.js              # Main application component
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
├── README.md          # This file
└── assets/           # App icons and images
```

## Technical Implementation 🛠️

### Key Technologies Used
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **Expo Notifications**: Local push notifications
- **AsyncStorage**: Local data persistence
- **Expo Vector Icons**: Beautiful icon library

### State Management
- Uses React hooks (`useState`, `useEffect`) for state management
- Implements proper data flow and component lifecycle
- Handles async operations for storage and notifications

### Notification System
- Schedules local notifications 1 minute after task creation
- Automatically cancels notifications when tasks are completed
- Requests proper permissions for notifications

### Data Persistence
- Saves tasks to device storage using AsyncStorage
- Loads tasks automatically on app startup
- Handles storage errors gracefully

## Design Choices & Challenges 🎯

### Design Decisions
1. **Color Scheme**: Used a modern indigo/purple gradient (#6366F1) for a professional look
2. **Typography**: Clear, readable fonts with proper hierarchy
3. **Spacing**: Consistent padding and margins throughout the app
4. **Visual Feedback**: Smooth animations and active states for better UX

### Challenges Faced
1. **Notification Permissions**: Implementing proper permission requests for different platforms
2. **State Synchronization**: Ensuring notification cancellation works correctly with task completion
3. **Data Persistence**: Handling async storage operations and error states
4. **Cross-Platform Compatibility**: Ensuring consistent behavior on iOS and Android

### Solutions Implemented
- Added comprehensive error handling for storage operations
- Implemented proper notification lifecycle management
- Used platform-specific styling where necessary
- Added input validation and user feedback

## Future Enhancements 🚀

Potential improvements for future versions:
- [ ] Task editing functionality
- [ ] Task categories and tags
- [ ] Due dates and custom reminder times
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Cloud synchronization
- [ ] Dark mode support
- [ ] Drag-and-drop reordering

## Testing 🧪

### Manual Testing Checklist
- [ ] Add new tasks
- [ ] Mark tasks as complete/incomplete
- [ ] Delete tasks (with confirmation)
- [ ] Receive notifications
- [ ] App persistence after closing/reopening
- [ ] Empty state display
- [ ] Input validation (empty tasks)

### Device Testing
- Tested on iOS simulator and Android emulator
- Verified notification functionality
- Confirmed data persistence across app restarts

## Troubleshooting 🔧

### Common Issues & Solutions

**App won't start / Metro bundler issues:**
```bash
# Clear all caches
npx expo start --clear

# Or if that doesn't work:
rm -rf node_modules
npm install
npx expo start --clear
```

**"Unable to resolve module" errors:**
```bash
# Clear Metro cache
npx expo start --clear

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Expo CLI issues:**
```bash
# Update Expo CLI to latest version
npm install -g @expo/cli

# Or use npx instead
npx expo start
```

**App crashes on startup:**
- Check that you're using compatible versions of React Native and Expo
- Make sure all dependencies are installed correctly
- Try running on a different device/simulator

**Notifications not working:**
- Ensure you've granted notification permissions
- Check that Expo Go has permission to send notifications
- Verify you're testing on a physical device (notifications may not work in simulators)

**Tasks not persisting:**
- Ensure AsyncStorage is properly installed
- Check device storage permissions
- Verify the app isn't being force-closed by the system

### Step-by-Step Debugging

If the app still won't open, try these steps in order:

1. **Check Node.js version:**
   ```bash
   node --version
   # Should be v16 or higher
   ```

2. **Update Expo CLI:**
   ```bash
   npm install -g @expo/cli@latest
   ```

3. **Create fresh project (if needed):**
   ```bash
   npx create-expo-app MyTasksApp
   cd MyTasksApp
   # Then copy the App.js content
   ```

4. **Install dependencies one by one:**
   ```bash
   npx expo install expo-notifications
   npx expo install @react-native-async-storage/async-storage
   npx expo install @expo/vector-icons
   ```

5. **Start with tunnel mode:**
   ```bash
   npx expo start --tunnel
   ```

## Contributing 🤝

Feel free to submit issues, feature requests, or pull requests to improve this application.

## License 📄

This project is created for educational purposes as part of the AffWorld LLC React Native Developer assignment.

---

**Submission Date:** June 11, 2025  
**Assignment:** React Native Developer Assignment - Simple "My Tasks" App  
**Company:** AffWorld LLC