jest.mock('Linking', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn().mockImplementation(value => Promise.resolve(value)),
}));



jest.mock("react-native-reanimated", () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
        Value: jest.fn(),
        event: jest.fn(),
        add: jest.fn(),
        eq: jest.fn(),
        set: jest.fn(),
        cond: jest.fn(),
        interpolate: jest.fn(),
        View: View,
        Extrapolate: { CLAMP: jest.fn() }
    };
});


jest.mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
        Swipeable: View,
        DrawerLayout: View,
        State: {},
        ScrollView: View,
        Slider: View,
        Switch: View,
        TextInput: View,
        ToolbarAndroid: View,
        ViewPagerAndroid: View,
        DrawerLayoutAndroid: View,
        WebView: View,
        NativeViewGestureHandler: View,
        TapGestureHandler: View,
        FlingGestureHandler: View,
        ForceTouchGestureHandler: View,
        LongPressGestureHandler: View,
        PanGestureHandler: View,
        PinchGestureHandler: View,
        RotationGestureHandler: View,
        /* Buttons */
        RawButton: View,
        BaseButton: View,
        RectButton: View,
        BorderlessButton: View,
        /* Other */
        FlatList: View,
        gestureHandlerRootHOC: jest.fn(),
        Directions: {},
    };
});

// jest.mock('react-native-fabric', () => {
//     return {
//         Crashlytics: {
//             crash: () => {},
//         },
//         Answers: {
//             logCustom: () => {},
//             logContentView: () => {},
//         },
//     }
// })

// jest.mock('WebView', () => 'WebView');

// jest.mock('DatePickerIOS', () => 'DatePickerIOS');