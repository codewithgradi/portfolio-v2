import React from "react";

const AgentResponseTyping: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.bubble}>
        <span style={{ ...styles.dot, animationDelay: "0s" }} />
        <span style={{ ...styles.dot, animationDelay: "0.2s" }} />
        <span style={{ ...styles.dot, animationDelay: "0.4s" }} />
      </div>

      {/* Scoped CSS animation */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          40% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// Styling
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
  },
  bubble: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#f0f2f5",
    padding: "12px 16px",
    borderRadius: "18px",
    borderBottomLeftRadius: "4px", // Gives it a chat bubble look
  },
  dot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#65676b",
    borderRadius: "50%",
    display: "inline-block",
    animation: "bounce 1.4s infinite ease-in-out",
  },
};

export default AgentResponseTyping;
