import crypto from "crypto";

interface MailchimpConfig {
  apiKey: string;
  serverPrefix: string;
  audienceId: string;
}

interface MailchimpMember {
  email_address: string;
  status: "subscribed" | "unsubscribed" | "cleaned" | "pending";
  merge_fields: {
    FNAME?: string;
    LNAME?: string;
    [key: string]: string | undefined;
  };
  tags?: string[];
}

interface MailchimpResponse {
  id: string;
  email_address: string;
  status: string;
  merge_fields: {
    FNAME: string;
    LNAME: string;
    [key: string]: string;
  };
}

class MailchimpService {
  private config: MailchimpConfig;

  constructor() {
    this.config = {
      apiKey: process.env.MAILCHIMP_API_KEY || "",
      serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX || "",
      audienceId: process.env.MAILCHIMP_AUDIENCE_ID || "",
    };

    if (
      !this.config.apiKey ||
      !this.config.serverPrefix ||
      !this.config.audienceId
    ) {
      throw new Error(
        "Missing Mailchimp configuration. Please check your environment variables."
      );
    }
  }

  private getApiUrl(endpoint: string): string {
    return `https://${this.config.serverPrefix}.api.mailchimp.com/3.0${endpoint}`;
  }

  private getHeaders(): HeadersInit {
    return {
      Authorization: `Bearer ${this.config.apiKey}`,
      "Content-Type": "application/json",
    };
  }

  async subscribeToNewsletter(
    email: string,
    firstName?: string,
    lastName?: string
  ): Promise<MailchimpResponse> {
    const memberData: MailchimpMember = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
      },
      tags: ["newsletter", "website"],
    };

    const response = await fetch(
      this.getApiUrl(`/lists/${this.config.audienceId}/members`),
      {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(memberData),
      }
    );

    if (!response.ok) {
      if (response.status === 400) {
        // Member might already exist, try to update
        const existingMember = await this.updateMember(
          email,
          firstName,
          lastName
        );
        return existingMember;
      }
      throw new Error(`Mailchimp API error: ${response.status}`);
    }

    return response.json();
  }

  async joinWaitlist(
    email: string,
    firstName?: string,
    lastName?: string,
    company?: string,
    interests?: string[]
  ): Promise<MailchimpResponse> {
    const memberData: MailchimpMember = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        COMPANY: company || "",
      },
      tags: ["waitlist", "launch-partner", "website", ...(interests || [])],
    };

    const response = await fetch(
      this.getApiUrl(`/lists/${this.config.audienceId}/members`),
      {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(memberData),
      }
    );

    if (!response.ok) {
      if (response.status === 400) {
        // Member might already exist, try to update with waitlist tags
        const existingMember = await this.updateMember(
          email,
          firstName,
          lastName,
          company,
          ["waitlist", "launch-partner", ...(interests || [])]
        );
        return existingMember;
      }
      throw new Error(`Mailchimp API error: ${response.status}`);
    }

    return response.json();
  }

  async subscribeEarlyAccess(
    email: string,
    firstName?: string,
    lastName?: string,
    company?: string,
    role?: string,
    budget?: string
  ): Promise<MailchimpResponse> {
    const memberData: MailchimpMember = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        COMPANY: company || "",
        ROLE: role || "",
        BUDGET: budget || "",
      },
      tags: ["early-access", "qualified-lead", "website"],
    };

    const response = await fetch(
      this.getApiUrl(`/lists/${this.config.audienceId}/members`),
      {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(memberData),
      }
    );

    if (!response.ok) {
      if (response.status === 400) {
        const existingMember = await this.updateMember(
          email,
          firstName,
          lastName,
          company,
          ["early-access", "qualified-lead"]
        );
        return existingMember;
      }
      throw new Error(`Mailchimp API error: ${response.status}`);
    }

    return response.json();
  }

  private async updateMember(
    email: string,
    firstName?: string,
    lastName?: string,
    company?: string,
    tags?: string[]
  ): Promise<MailchimpResponse> {
    const memberHash = this.getMemberHash(email);

    const updateData: Partial<MailchimpMember> = {
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        COMPANY: company || "",
      },
    };

    if (tags) {
      updateData.tags = tags;
    }

    const response = await fetch(
      this.getApiUrl(`/lists/${this.config.audienceId}/members/${memberHash}`),
      {
        method: "PATCH",
        headers: this.getHeaders(),
        body: JSON.stringify(updateData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to update member: ${response.status}`);
    }

    return response.json();
  }

  private getMemberHash(email: string): string {
    return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
  }

  async addTags(email: string, tags: string[]): Promise<void> {
    const memberHash = this.getMemberHash(email);

    const tagData = {
      tags: tags.map((tag) => ({ name: tag, status: "active" })),
    };

    const response = await fetch(
      this.getApiUrl(
        `/lists/${this.config.audienceId}/members/${memberHash}/tags`
      ),
      {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(tagData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to add tags: ${response.status}`);
    }
  }
}

export const mailchimpService = new MailchimpService();
