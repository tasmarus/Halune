"use client";

type DashboardProps = {
  builderOpen: boolean;
  setBuilderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Dashboard({
  builderOpen,
  setBuilderOpen,
}: DashboardProps) {
  return (
    <>
      Dashboard
    </>
  );
}