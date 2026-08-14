import React from "react";

interface Props {
  response: string;
  isUser?: boolean;
  timestamp?: string;
}

const ChatBubble: React.FC<Props> = ({
  response,
  isUser = false,
  timestamp,
}) => {
  return (
    <div
      style={{
        ...styles.wrapper,
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          ...styles.bubble,
          ...(isUser ? styles.userBubble : styles.agentBubble),
        }}
      >
        <p style={styles.text}>{response}</p>

        {timestamp && (
          <span
            style={{
              ...styles.timestamp,
              color: isUser ? "rgba(255, 255, 255, 0.7)" : "#8e8e93",
            }}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    width: "100%",
    margin: "8px 0",
  },
  bubble: {
    maxWidth: "70%",
    padding: "12px 16px",
    borderRadius: "18px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    wordBreak: "break-word",
  },
  agentBubble: {
    backgroundColor: "#f2f2f7",
    color: "#1c1c1e",
    borderBottomLeftRadius: "4px", // Tail effect for agent
  },
  userBubble: {
    backgroundColor: "#007aff",
    color: "#ffffff",
    borderBottomRightRadius: "4px", // Tail effect for user
  },
  text: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: "1.4",
    whiteSpace: "pre-wrap",
  },
  timestamp: {
    fontSize: "0.7rem",
    alignSelf: "flex-end",
    marginTop: "2px",
  },
};

export default ChatBubble;
