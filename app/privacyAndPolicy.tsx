import { ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className="mb-5 rounded-2xl border border-zinc-200 bg-white p-5">
      <Text className="mb-2 text-xl font-medium text-zinc-900">{title}</Text>

      <Text className="text-base font-normal leading-6 text-zinc-600">
        {children}
      </Text>
    </View>
  );
}

export default function PrivacyPolicyScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Privacy Policy",
          headerStyle: {
            backgroundColor: "#E91E63",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "500",
          },
        }}
      />

      <SafeAreaView className="flex-1 bg-canvas" edges={["bottom"]}>
        <ScrollView
          contentContainerClassName="p-5 pb-10"
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-5 rounded-3xl bg-primary p-6">
            <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-white">
              <Ionicons
                name="shield-checkmark-outline"
                size={27}
                color="#E91E63"
              />
            </View>

            <Text className="text-3xl font-medium leading-10 text-white">
              Your privacy matters
            </Text>

            <Text className="mt-3 text-base font-normal leading-6 text-white">
              This page explains how Mbhombi Financial Services handles the
              personal information you provide when using the application.
            </Text>
          </View>

          <PolicySection title="Information we collect">
            We may collect information you provide when registering, managing
            your profile, creating an account, or using financial services.
            This may include your name, contact details, identification
            information, address, and account information.
          </PolicySection>

          <PolicySection title="How we use your information">
            We use your information to create and manage your profile, provide
            requested financial services, secure your account, communicate
            important updates, and meet applicable legal and regulatory
            requirements.
          </PolicySection>

          <PolicySection title="How we protect your information">
            We use reasonable technical and organisational safeguards to
            protect customer information. You should also protect your
            password, account PIN, one-time PIN, and mobile device.
          </PolicySection>

          <PolicySection title="Sharing of information">
            We do not sell your personal information. Information may only be
            shared with authorised service providers, regulators, or other
            parties when required to provide a service or comply with the law.
          </PolicySection>

          <PolicySection title="Your choices">
            You may review, update, or delete your profile through the Profile
            section, subject to backend availability and applicable legal or
            record-retention requirements.
          </PolicySection>

          <PolicySection title="Contact us">
            If you have questions about this Privacy Policy or how your
            information is handled, please contact Mbhombi Financial Services
            through the official customer support channel.
          </PolicySection>

          <Text className="mt-1 text-center text-sm font-normal text-zinc-500">
            Last updated: September 2026
          </Text>

          <Text className="mt-2 text-center text-sm font-normal text-zinc-500">
            © Mbhombi Financial Services
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}